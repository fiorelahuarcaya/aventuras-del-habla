import { supabase } from "../client";

export const insertParentInfo = async (
  id_parent: string,
  birthdate: string,
  first_name: string,
  last_name: string,
  gender: string
) => {
  try {
    // Insert Child
    const { data, error } = await supabase
      .from("CHILD")
      .insert([{ id_parent, birthdate, first_name, last_name, gender }])
      .select();

    if (error) {
      return { data, error: true, message: error.message };
    }

    return { data, error: false };
  } catch (error) {
    console.error(error);
  }
};
