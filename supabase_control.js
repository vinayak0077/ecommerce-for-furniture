import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database

const supabaseURL = "https://syilncniizuoxyhskxoh.supabase.co";
const supabaseKEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN5aWxuY25paXp1b3h5aHNreG9oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTczNDkxMDMsImV4cCI6MjA3MjkyNTEwM30.Fft0DQDcw91aYZZ4wmE-b14MixqVn_PVs20Paf-Ju5w";

export const supabase = createClient(supabaseURL, supabaseKEY);

