import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

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
