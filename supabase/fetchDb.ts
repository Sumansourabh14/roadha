import supabase from "./supabase";

export const getSources = async () => {
  const { data, error } = await supabase.from("sources").select();

  return { data, error };
};

export const getRules = async (sourceId: string) => {
  const { data, error } = await supabase
    .from("rules")
    .select()
    .eq("source_id", sourceId);

  return { data, error };
};
