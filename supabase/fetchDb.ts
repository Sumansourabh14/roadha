import supabase from "./supabase";

export const getSources = async () => {
  const { data, error } = await supabase.from("sources").select();

  return { data, error };
};
