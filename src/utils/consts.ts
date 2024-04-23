export async function getApiKey() {
  if (import.meta.env) {
    return import.meta.env.PUBLIC_SUPABASE_API_KEY;
  }

  const dotenv = (await import("dotenv")).default;
  dotenv.config();
  return process.env.PUBLIC_SUPABASE_API_KEY;
}

export async function getApiURL() {
  if (import.meta.env) {
    return import.meta.env.PUBLIC_SUPABASE_URL;
  }

  const dotenv = (await import("dotenv")).default;
  dotenv.config();
  return process.env.PULBIC_SUPABASE_URL;
}
