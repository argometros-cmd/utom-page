const SUPABASE_URL_FALLBACK = 'https://gnzneytwugcebhaxtzem.supabase.co';

export function getSupabaseProjectUrl() {
  const rawUrl = import.meta.env.VITE_SUPABASE_URL?.trim() || SUPABASE_URL_FALLBACK;
  return rawUrl.replace(/\/rest\/v1\/?$/, '').replace(/\/$/, '');
}

export function getSupabaseRestUrl() {
  return `${getSupabaseProjectUrl()}/rest/v1`;
}

export function getSupabaseAnonKey() {
  return import.meta.env.VITE_SUPABASE_ANON_KEY?.trim() || '';
}
