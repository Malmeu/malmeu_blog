import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://pzyyjsljzcnmbovbftmh.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB6eXlqc2xqemNubWJvdmJmdG1oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUyMjU4NjMsImV4cCI6MjA4MDgwMTg2M30.xq5pjLruOTEGBQ7Pr12C5X4iyHkCYCwH6HNwfYUCswk";
const supabase = createClient(supabaseUrl, supabaseAnonKey) ;

export { supabase as s };
