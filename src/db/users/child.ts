import { supabase } from "../client";
import { insertDefaultEvaluations } from "../evaluation";

export const insertChildInfo = async (
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

    // Insert default evaluations
    const [{ id_child: idChild }] = data;
    await insertDefaultEvaluations(idChild);

    return { data, error: false };
  } catch (error) {
    console.error(error);
  }
};
