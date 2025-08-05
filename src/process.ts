import { createClient } from "@supabase/supabase-js";

export const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL!;
export const supabaseKey: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
export const vercelUrl: string = process.env.NEXT_PUBLIC_VERCEL_URL!;
export const supabase = createClient(supabaseUrl, supabaseKey);
