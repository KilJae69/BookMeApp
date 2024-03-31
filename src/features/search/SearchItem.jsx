import { FaFolderOpen, FaTags } from "react-icons/fa";
import Heading from "../../components/Heading";
import BookmarkItem from "../bookmarks/BookmarkItem";

function SearchItem({ transformedSearchResult }) {
  const collectionName = transformedSearchResult.collection_name;
  const categories = transformedSearchResult.categories;

  return (
    <li className="py-5">
      <div className="flex gap-3 mb-3">
        <FaFolderOpen className="inline-block text-primary400 dark:text-primaryDark600 text-2xl " />
        <Heading className="text-primary400 dark:text-white text-xl" level={2}>
          {collectionName}
        </Heading>
      </div>

      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <div className="flex gap-3 mb-2">
              <FaTags className="inline-block text-xl text-primary400 dark:text-primaryDark500" />
              <Heading className="dark:text-textPrimaryDark" level={3}>
                {category.category_name}
              </Heading>
            </div>

            <ul>
              {category.bookmarks.map((bookmark) => (
                <BookmarkItem
                  categoryColor={category.color}
                  key={bookmark.id}
                  bookmark={bookmark}
                />
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default SearchItem;
