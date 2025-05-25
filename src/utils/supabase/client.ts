import { createBrowserClient } from "@supabase/ssr";
import { supabaseKey, supabaseUrl } from "../../process";

export function createClient() {
  return createBrowserClient(supabaseUrl, supabaseKey);
}
