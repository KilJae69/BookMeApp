import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ahdmlbskstpzshobwtvq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFoZG1sYnNrc3RwenNob2J3dHZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcwNDE1NzAsImV4cCI6MjAyMjYxNzU3MH0.Q3FCJ5sEknUFEiG-3D76on2orUBs1SCaa-LWaiSmvm0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
