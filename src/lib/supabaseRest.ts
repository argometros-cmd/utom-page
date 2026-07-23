import { getSupabaseAnonKey, getSupabaseRestUrl } from './env';

const supabaseRestUrl = getSupabaseRestUrl();
const supabaseAnonKey = getSupabaseAnonKey();

type RestMethod = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';

export async function supabaseRestFetch<T>(
  path: string,
  options: {
    method?: RestMethod;
    body?: unknown;
    headers?: HeadersInit;
  } = {},
): Promise<T> {
  if (!supabaseAnonKey) {
    throw new Error('Missing VITE_SUPABASE_ANON_KEY. Add it to your .env.local file.');
  }

  const response = await fetch(`${supabaseRestUrl}${path.startsWith('/') ? path : `/${path}`}`, {
    method: options.method ?? 'GET',
    headers: {
      apikey: supabaseAnonKey,
      authorization: `Bearer ${supabaseAnonKey}`,
      'content-type': 'application/json',
      ...(options.headers ?? {}),
    },
    body: options.body === undefined ? undefined : JSON.stringify(options.body),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Supabase REST request failed (${response.status}): ${errorText}`);
  }

  return response.json() as Promise<T>;
}
