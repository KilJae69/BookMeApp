import { getToday } from "../helpers/getToday";
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


  return data;
}

export async function searchBookmarks(searchTerm, userId) {
  const { data, error } = await supabase
    .from("bookmarks")
    .select(
      `
      *,
      categories:category_id (
          category_name,
          id,
          color,
          collections:collection_id (
              id,
              collection_name
          )
      )
    `
    )
    .eq("user_id", userId)
    .ilike("title", `%${searchTerm}%`);
    

  if (error) {
    console.error(error);
    return [];
  }
 
  return data;
}

export async function getBookmarksAfterDate(date, userId,includeAll=false) {
  const todayEnd = getToday({ end: true }); 

  let query = supabase
    .from("bookmarks")
    .select(
      `
      *,
      categories:category_id (
        color
      )
    `
    )
    .eq("user_id", userId)
    .eq("is_favorite", true)
    .order("favorited_at", { ascending: false });

  if (!includeAll) {
    query = query
      .gte("favorited_at", date.toISOString())
      .lte("favorited_at", todayEnd);
  }

  const { data, error } = await query;

  if (error) {
    console.error(error);
    throw new Error("Bookmarks could not get loaded");
  }

  return data;
}

export async function updateBookmarkFavoriteStatus(bookmarkId,isFavorite){
  const { data, error } = await supabase
    .from("bookmarks")
    .update({ is_favorite: isFavorite })
    .eq("id", bookmarkId)


  if (error) {
    console.error(error);
    throw new Error("Error updating bookmark");
  }

  return data;
}