import { createClient } from '@supabase/supabase-js';
import { getSupabaseAnonKey, getSupabaseProjectUrl } from './env';

const supabaseUrl = getSupabaseProjectUrl();
const supabaseAnonKey = getSupabaseAnonKey();

if (!supabaseAnonKey) {
  // Vite exposes env vars at build time; this keeps the app fail-fast in development.
  console.warn('Missing VITE_SUPABASE_ANON_KEY. Supabase client is not fully configured.');
}

export const supabase = supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null;
