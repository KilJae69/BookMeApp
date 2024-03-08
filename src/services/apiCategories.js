import supabase from "./supabase";

export async function getCategoriesByCollectionId(collectionId) {
  const { data: categories, error } = await supabase
    .from("categories")
    .select("*,bookmarks(*)")
    .eq("collection_id", collectionId)
    .order("id", { ascending: true });

  if (error) {
    console.error(error);
    throw new Error(
      "There was a problem getting categories for this collection"
    );
  }
  return categories;
}

export async function createCategory(newCategory) {
  const { data, error } = await supabase
    .from("categories")
    .insert([newCategory]);

  if (error) {
    console.error(error);
    throw new Error("There was a problem creating the category");
  }

  return data;
}

export async function deleteCategory(categoryId) {
  const { error } = await supabase
    .from("categories")
    .delete()
    .eq("id", categoryId);

  if (error) {
    console.error(error);
    throw new Error("Error deleting category");
  }
}

export async function updateCategory(categoryId, updatedCategory) {
  const { data, error } = await supabase
    .from("categories")
    .update(updatedCategory)
    .eq("id", categoryId)
    .select();

  if (error) {
    console.error(error);
    throw new Error("Error updating category");
  }

  console.log("Category updated", data);
  return data;
}
