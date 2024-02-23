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

export async function getCollectionById(collectionId) {
  const { data: collection, error } = await supabase
    .from("collections")
    .select("*,categories(*)")
    .eq("id", collectionId)
    .single()
    
  if (error) {
    console.error(error);
    throw new Error("Error fetching collection");
  }

  return collection;
  
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

export async function renameCollection(collectionId, newName) {
  const { data, error } = await supabase
    .from("collections")
    .update({ collection_name: newName })
    .eq("id", collectionId)
    .select();

  if (error) {
    console.error(error);
    throw new Error("Error renaming collection");
  }

  console.log("Collection renamed", data);
  return data;
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

  console.log("Collection deleted");
}

