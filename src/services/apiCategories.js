import supabase from "./supabase";

// export async function fetchCategoriesForCollection(collectionId) {
//   const { data: categories, error } = await supabase
//     .from("categories")
//     .select("*")
//     .eq("collection_id", collectionId)
//     .order("id", { ascending: true });

//   if (error) {
//     console.error(error);
//     throw new Error("Error fetching categories");
//   }

//   return categories;
// }

export async function createCategory(newCategory) {
  const { data, error } = await supabase.from("categories").insert([newCategory]).select();

  if (error) {
    console.error(error);
    throw new Error("There was a problem creating the category");
  }

  return data;
}