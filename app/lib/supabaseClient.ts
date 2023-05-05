import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://habnomeqzcrzquywudli.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhhYm5vbWVxemNyenF1eXd1ZGxpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMyODE1OTMsImV4cCI6MTk5ODg1NzU5M30.pQR1PYz_Kpd9V4zYfmLAiFNDcbrzE8ypo7zgHL4ja_Q'
)
