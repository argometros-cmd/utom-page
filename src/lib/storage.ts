import { supabase } from './supabase';

const STORAGE_LIST_PAGE_SIZE = 1000;

export type StorageFileNode = {
  type: 'file';
  name: string;
  path: string;
  id: string | null;
  updatedAt: string | null;
  metadata: Record<string, unknown> | null;
  publicUrl: string;
};

export type StorageFolderNode = {
  type: 'folder';
  name: string;
  path: string;
  children: StorageNode[];
};

export type StorageNode = StorageFileNode | StorageFolderNode;

export type ListStorageFolderOptions = {
  recursive?: boolean;
  includePublicUrl?: boolean;
};

function joinStoragePath(parentPath: string, childName: string) {
  const cleanedParent = parentPath.replace(/\/+$/, '');
  const cleanedChild = childName.replace(/^\/+/, '');
  return cleanedParent ? `${cleanedParent}/${cleanedChild}` : cleanedChild;
}

function normalizeFolderPath(folderPath: string) {
  return folderPath.replace(/^\/+/, '').replace(/\/+$/, '');
}

async function listStoragePage(bucketName: string, folderPath: string, offset: number) {
  if (!supabase) {
    throw new Error('Supabase client is not configured. Check VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.');
  }

  const { data, error } = await supabase.storage.from(bucketName).list(folderPath, {
    limit: STORAGE_LIST_PAGE_SIZE,
    offset,
    sortBy: { column: 'name', order: 'asc' },
  });

  if (error) {
    throw error;
  }

  return data ?? [];
}

async function listAllStorageEntries(bucketName: string, folderPath: string) {
  const entries: Awaited<ReturnType<typeof listStoragePage>> = [];
  let offset = 0;

  while (true) {
    const page = await listStoragePage(bucketName, folderPath, offset);
    if (page.length === 0) {
      break;
    }

    entries.push(...page);

    if (page.length < STORAGE_LIST_PAGE_SIZE) {
      break;
    }

    offset += STORAGE_LIST_PAGE_SIZE;
  }

  return entries;
}

function toStorageFileNode(bucketName: string, folderPath: string, item: any): StorageFileNode {
  const path = joinStoragePath(folderPath, item.name);
  const { data } = supabase!.storage.from(bucketName).getPublicUrl(path);

  return {
    type: 'file',
    name: item.name,
    path,
    id: item.id ?? null,
    updatedAt: item.updated_at ?? null,
    metadata: item.metadata ?? null,
    publicUrl: data.publicUrl,
  };
}

async function toStorageNode(
  bucketName: string,
  folderPath: string,
  item: any,
  recursive: boolean,
  includePublicUrl: boolean,
): Promise<StorageNode> {
  const isFolder = item.metadata === null || item.id === null;
  const path = joinStoragePath(folderPath, item.name);

  if (isFolder) {
    const children = recursive
      ? await listStorageFolder(bucketName, path, { recursive, includePublicUrl })
      : [];

    return {
      type: 'folder',
      name: item.name,
      path,
      children,
    };
  }

  const fileNode = toStorageFileNode(bucketName, folderPath, item);

  if (!includePublicUrl) {
    return {
      ...fileNode,
      publicUrl: '',
    };
  }

  return fileNode;
}

export async function listStorageFolder(
  bucketName: string,
  folderPath = '',
  options: ListStorageFolderOptions = {},
): Promise<StorageNode[]> {
  const recursive = options.recursive ?? true;
  const includePublicUrl = options.includePublicUrl ?? true;
  const normalizedFolderPath = normalizeFolderPath(folderPath);
  const entries = await listAllStorageEntries(bucketName, normalizedFolderPath);

  return Promise.all(
    entries.map((item) =>
      toStorageNode(bucketName, normalizedFolderPath, item, recursive, includePublicUrl),
    ),
  );
}
