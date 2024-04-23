import { createClient } from "@supabase/supabase-js";
import type { Database } from "./supabase";
import { getApiKey, getApiURL } from "../utils/consts";

const supabaseUrl = (await getApiURL()) || "";
const supabaseKey = (await getApiKey()) || "";

export const supabase = createClient<Database>(supabaseUrl, supabaseKey);
