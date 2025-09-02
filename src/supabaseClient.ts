// src/supabaseClient.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.https://zcbqcdjglcspllhqiygd.supabase.co;
const supabaseAnonKey = import.meta.env.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpjYnFjZGpnbGNzcGxsaHFpeWdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYxMjMwODIsImV4cCI6MjA3MTY5OTA4Mn0.i7iJU9hSlX0JE97lXvPUL-ZfGUQd0vNmvSATjcaR8yA

export const supabase = createClient(supabaseUrl, supabaseAnonKey);