import { addBookmarksToCategory } from "./addBookmarksToCategory";
import { processFolder } from "./processFolder";

export function processHTMLContent(htmlContent) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, "text/html");

  // Initialize the collection for Imported Bookmarks
  const importedBookmarksCollection = {
    collectionName: "Imported Bookmarks",
    categories: [],
  };

  // Special handling for Orphan Links (bookmarks not in any folder)
  const orphanBookmarks = doc.querySelectorAll("body > dl > dt > a");
  if (orphanBookmarks.length) {
    addBookmarksToCategory(
      importedBookmarksCollection,
      "Orphan Links",
      orphanBookmarks
    );
  }

  // Process top-level folders
  const folders = doc.querySelectorAll("body > dl > dt");
  folders.forEach((folder) => {
    const isFolder = folder.querySelector("dl") !== null; // Check if it has a sub-folder structure
    if (isFolder) {
      // Process only if it's a folder
      processFolder(folder, importedBookmarksCollection);
    }
  });

  console.log([importedBookmarksCollection]);
}
