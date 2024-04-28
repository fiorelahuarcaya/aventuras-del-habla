import type { User } from "@supabase/supabase-js";
import { supabase } from "./client";
import { retrieveUser } from "./users/auth";

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

export const retrieveEvaluations = async () => {
  try {
    const userInfo = await retrieveUser();

    if (userInfo === undefined || userInfo.error === true) {
      return { data: userInfo, error: true };
    }

    const userData = userInfo.data as User;
    const idUser = userData.id;

    // prettier-ignore
    let { data, error } = await supabase
    .from('PROFILE')
    .select(`
      id_user, first_name, last_name,
      PARENT(
        CHILD(
          first_name, last_name,
          EVALUATION(
            id_evaluation, finished_at, evaluated_at,
            PRACTICE(
              id_practice, title, description, type
            )
          )
        )
      )
    `)
    .eq('id_user', idUser);

    if (error) {
      return { data, error: true, message: error.message };
    }

    return { data, error: false };
  } catch (error) {
    console.error(error);
  }
};
