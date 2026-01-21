import { createClient } from '@supabase/supabase-js'

const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtvenZqd2l3ZnBtdWR2cXN5cGZhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2OTAxMjU0OSwiZXhwIjoyMDg0NTg4NTQ5fQ.1wrbdhgG9881zZu4Gj1I1qYqaBJs6G2EoY_6GU_7eeA'

const SUPABASE_URL = "https://kozvjwiwfpmudvqsypfa.supabase.co"



export const supabase = createClient(
    SUPABASE_URL!,
    SUPABASE_KEY
)
