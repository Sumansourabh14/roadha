import supabase from "./supabase";

export const getSources = async () => {
  const { data, error } = await supabase.from("sources").select();
  console.log({ data });

  return { data, error };
};
