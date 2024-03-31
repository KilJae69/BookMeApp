export function generateBookmarkHTML(bookmarksData) {
  let htmlContent = `<!DOCTYPE NETSCAPE-Bookmark-file-1>
<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8">
<TITLE>Bookmarks</TITLE>
<H1>Bookmarks</H1>
<DL><p>
`;

  bookmarksData.forEach((collection) => {
    htmlContent += `    <DT><H3>${collection.collectionName}</H3>\n    <DL><p>\n`;
    collection.categories.forEach((category) => {
      htmlContent += `        <DT><H3>${category.categoryName}</H3>\n        <DL><p>\n`;
      category.bookmarks.forEach((bookmark) => {
        htmlContent += `            <DT><A HREF="${bookmark.url}">${bookmark.title}</A>\n`;
      });
      htmlContent += "        </DL><p>\n";
    });
    htmlContent += "    </DL><p>\n";
  });

  htmlContent += "</DL><p>";
  return htmlContent;
}
