import { addBookmarksToCategory } from "./addBookmarksToCategory";

export function processFolder(folder, collection) {
  const folderName =
    folder.querySelector("h3")?.textContent || "Unnamed Folder";
  const bookmarks = folder.querySelectorAll("a");

  // Add bookmarks to the corresponding category
  addBookmarksToCategory(collection, folderName, bookmarks);
}
