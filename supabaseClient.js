import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://bhsdwqacuvuvvzscbamr.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJoc2R3cWFjdXZ1dnZ6c2NiYW1yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAyNzcwNzUsImV4cCI6MjA0NTg1MzA3NX0.HBxMdiTRPQP8S-wXQfm-S3f3nUj1BsrsJuG8c6lLP20"
export const supabase = createClient(supabaseUrl, supabaseKey)