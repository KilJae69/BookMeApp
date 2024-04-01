export const useTransformSearchResults = (bookmarks) => {
  const collections = {};

  bookmarks.forEach((bookmark) => {
    // Extract necessary details from the bookmark
    const collectionId = bookmark.categories.collections.id;
    const collectionName = bookmark.categories.collections.collection_name;
    const categoryId = bookmark.category_id;
    const categoryName = bookmark.categories.category_name;
    const color = bookmark.categories.color; 

    // Ensure the collection exists in the collections object
    if (!collections[collectionId]) {
      collections[collectionId] = {
        id: collectionId,
        collection_name: collectionName,
        categories: {},
      };
    }

    // Ensure the category exists in the collection
    if (!collections[collectionId].categories[categoryId]) {
      collections[collectionId].categories[categoryId] = {
        id: categoryId,
        category_name: categoryName,
        color: color,
        bookmarks: [],
      };
    }

    // Add the bookmark to the category in the collection
    collections[collectionId].categories[categoryId].bookmarks.push(bookmark);
  });


  return Object.values(collections).map((collection) => ({
    ...collection,
    categories: Object.values(collection.categories),
  }));
};
