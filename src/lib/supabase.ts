import { createClient } from '@supabase/supabase-js'

// Support both import.meta.env (Vite/Astro) and process.env (Node/Vercel)
const supabaseUrl = import.meta.env?.PUBLIC_SUPABASE_URL || process.env.PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env?.PUBLIC_SUPABASE_ANON_KEY || process.env.PUBLIC_SUPABASE_ANON_KEY || ''

// Create client only if environment variables are available
let supabase: ReturnType<typeof createClient> | null = null

try {
  if (supabaseUrl && supabaseAnonKey) {
    supabase = createClient(supabaseUrl, supabaseAnonKey)
  }
} catch (e) {
  console.error('Failed to create Supabase client:', e)
}

export { supabase }

export interface Comment {
  id: string
  name: string
  email: string
  content: string
  article_slug: string
  article_title: string
  status: 'pending' | 'approved' | 'rejected'
  created_at: string
}
