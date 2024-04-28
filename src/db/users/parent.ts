import { supabase } from "../client";

export const insertParentInfo = async (
  first_name: string,
  last_name: string,
  cellphone: string,
  email: string,
  id_user: string
) => {
  try {
    // Insert Profile
    const { data: profileData, error: profileError } = await supabase
      .from("PROFILE")
      .insert([
        {
          first_name,
          last_name,
          cellphone,
          email,
          id_user,
        },
      ])
      .select();

    if (profileError) {
      return { data: profileData, error: true, message: profileError.message };
    }

    const [{ id_profile: idProfile }] = profileData;

    // Insert Parent
    const { data: parentData, error: parentError } = await supabase
      .from("PARENT")
      .insert([{ id_profile: idProfile }])
      .select();

    if (parentError) {
      return { data: profileData, error: true, message: parentError.message };
    }

    return { data: { profileData, parentData }, error: false };
  } catch (error) {
    console.error(error);
  }
};
