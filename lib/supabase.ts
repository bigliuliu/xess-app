import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://lmdaykanggnkguxlpprp.supabase.co'
const supabasePublicKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxtZGF5a2FuZ2dua2d1eGxwcHJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ5MTMwNDIsImV4cCI6MjA0MDQ4OTA0Mn0.W0bUAdUWUpKH2HUOW5XftlvWm5CPVq1cZ3dFYJIOfIo'

export const supabase = createClient(supabaseUrl, supabasePublicKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})
