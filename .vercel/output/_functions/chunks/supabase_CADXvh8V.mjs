import { createClient } from '@supabase/supabase-js';

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "PUBLIC_SUPABASE_ANON_KEY": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB6eXlqc2xqemNubWJvdmJmdG1oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUyMjU4NjMsImV4cCI6MjA4MDgwMTg2M30.xq5pjLruOTEGBQ7Pr12C5X4iyHkCYCwH6HNwfYUCswk", "PUBLIC_SUPABASE_URL": "https://pzyyjsljzcnmbovbftmh.supabase.co", "SITE": "https://malmeu.info", "SSR": true};
const supabaseUrl = Object.assign(__vite_import_meta_env__, { _: process.env._ })?.PUBLIC_SUPABASE_URL || process.env.PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = Object.assign(__vite_import_meta_env__, { _: process.env._ })?.PUBLIC_SUPABASE_ANON_KEY || process.env.PUBLIC_SUPABASE_ANON_KEY || "";
let supabase = null;
try {
  if (supabaseUrl && supabaseAnonKey) {
    supabase = createClient(supabaseUrl, supabaseAnonKey);
  }
} catch (e) {
  console.error("Failed to create Supabase client:", e);
}

export { supabase as s };
