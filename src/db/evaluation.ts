import { supabase } from "./client";

export const insertDefaultEvaluations = async (id_child: string) => {
  try {
    const { data, error } = await supabase
      .from("EVALUATION")
      .insert([
        { id_child, id_practice: "19bc00ab-5f4f-432e-a8b3-7582a0b6c822" },
        { id_child, id_practice: "e1bc9382-de38-43c4-bd53-726f0e01967d" },
      ])
      .select();

    if (error) {
      return { data, error: true, message: error.message };
    }

    return { data, error: false };
  } catch (error) {
    console.error(error);
  }
};
