export function downloadBookmarksFile(htmlContent) {
  const blob = new Blob([htmlContent], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "bookMeApp_bookmarks_export.html";
  document.body.appendChild(a); // We need to append the element to the dom -> otherwise it will not work in firefox
  a.click();
  URL.revokeObjectURL(url);
  document.body.removeChild(a);
}
