import supabase from "./supabase";

export async function getBookmarksByCategoryId(categoryId) {
  const { data: bookmarks, error } = await supabase
    .from("bookmarks")
    .select("*")
    .eq("category_id", categoryId)
    .order("id", { ascending: true });

  if (error) {
    console.error(error);
    throw new Error("There was a problem getting bookmarks for this category");
  }
  return bookmarks;
}

export async function createBookmark(newBookmark) {
  const { data, error } = await supabase
    .from("bookmarks")
    .insert([newBookmark])
    .select();

  if (error) {
    console.error(error);
    throw new Error("There was a problem adding this bookmark");
  }

  return data;
}

export async function deleteBookmark(bookmarkId) {
  const { error } = await supabase
    .from("bookmarks")
    .delete()
    .eq("id", bookmarkId);

  if (error) {
    console.error(error);
    throw new Error("Error deleting this bookmark");
  }

}

export async function updateBookmark(bookmarkId, updatedBookmark) {
  const { data, error } = await supabase
    .from("bookmarks")
    .update(updatedBookmark)
    .eq("id", bookmarkId)
    .select();
  

  if (error) {
    console.error(error);
    throw new Error("Error updating bookmark");
  }

  console.log("Bookmark updated", data);
  return data;
}

export async function searchBookmarks(searchTerm) {
  const { data, error } = await supabase
    .from("bookmarks")
    .select(
      `
        *,
        categories:category_id (
          category_name,
          color,
          collections:collection_id (
            collection_name
          )
        )
    `
    )
    .ilike("title", `%${searchTerm}%`);

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}
