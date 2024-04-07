import supabase from "./supabase";

export async function getCollections(userId) {
  const { data: collections, error } = await supabase
    .from("collections")
    .select("*")
    .eq("user_id", userId)
    .order("id", { ascending: true });
  if (error) {
    console.error(error);
    throw new Error("Error fetching collections");
  }

  return collections;
}


export async function createCollection(newCollection) {
  const { data, error } = await supabase
    .from("collections")
    .insert([newCollection])
    .select();
    

  if (error) {
    console.error(error);
    throw new Error("Error creating collection");
  }

  return data;
}

export async function updateCollection(collectionId, newName) {
  const { data, error } = await supabase
    .from("collections")
    .update({ collection_name: newName })
    .eq("id", collectionId)
    

  if (error) {
    console.error(error);
    throw new Error("Error updating collection");
  }

  
  return {data, newName, collectionId};
}

export async function deleteCollection(collectionId) {
  const { error } = await supabase
    .from("collections")
    .delete()
    .eq("id", collectionId);

  if (error) {
    console.error(error);
    throw new Error("Error deleting collection");
  }
}

export async function getCollectionsForExport(userId) {
  const { data, error } = await supabase
    .from("collections")
    .select(
      `
      collection_name,
      categories (
        category_name,
        bookmarks (
          title,
          url
        )
      )
    `
    )
    .eq("user_id", userId)
    .order("id", { ascending: true });

  if (error) {
    console.error(error);
    throw new Error("Error fetching collections for export");
  }

  const transformedData = data.map((collection) => ({
    collectionName: collection.collection_name,
    categories: collection.categories.map((category) => ({
      categoryName: category.category_name,
      bookmarks: category.bookmarks.map((bookmark) => ({
        title: bookmark.title,
        url: bookmark.url,
      })),
    })),
  }));

  return transformedData;
}