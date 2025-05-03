import { createClient } from "@supabase/supabase-js";

const supabaseUrl ="https://bjzcicppditpkyasaivs.supabase.co";

const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJqemNpY3BwZGl0cGt5YXNhaXZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA0MDEzNDMsImV4cCI6MjA1NTk3NzM0M30.rfE0DIF2BjbSSSYUx2F180-WmHDfolLutIueY0FHDd0";

export const supabase = createClient(supabaseUrl,supabaseAnonKey);