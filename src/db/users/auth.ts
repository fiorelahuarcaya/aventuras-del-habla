import { supabase } from "../client";

export const signInWithEmail = async (email: string, password: string) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return { data, error: true, message: error.message };
    }

    return { data, error: false };
  } catch (error) {
    console.error(error);
  }
};

export const signUpNewUser = async (email: string, password: string) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      return { data, error: true, message: error.message };
    }

    console.log("check your email for the verification link");
    return { data, error: false };
  } catch (error) {
    console.error(error);
  }
};

export const signInWithGoogle = async () => {
  try {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    if (error) {
      return { data, error: true, message: error.message };
    }

    return { data, error: false };
  } catch (error) {
    console.error(error);
  }
};

export const signOut = async () => {
  try {
    const { error } = await supabase.auth.signOut();

    if (error) {
      return { data: error, error: true, message: error.message };
    }

    return { error: false };
  } catch (error) {
    console.error(error);
  }
};

export const retrieveUser = async () => {
  try {
    const { data, error } = await supabase.auth.getUser();

    if (error) {
      return { data, error: true, message: error.message };
    }

    return { data: data.user, error: false };
  } catch (error) {
    console.error(error);
  }
};
