import { useTransformSearchResults } from "../../hooks/useTransformSearchResults";
import Heading from "../../components/Heading";
import SearchItem from "./SearchItem";

function SearchResults({ searchResults }) {
  const transformedSearchResults = useTransformSearchResults(searchResults);

  return (
    <div className="p-2 sm:p-5 xl:p-10">
      <Heading
        className="text-2xl mb-3 text-primary600 dark:text-white"
        level={1}
      >
        Search Results:
      </Heading>
      <p className="text-textPrimary700 dark:text-textPrimaryDark">
        We found{" "}
        <span className="text-xl font-bold text-primary400 dark:text-primaryDark500">
          {searchResults.length}
        </span>{" "}
        {searchResults.length === 1 ? "bookmark" : "bookmarks"} for your search
      </p>
      <ul className="max-w-[700px]">
        {transformedSearchResults.map((searchResult) => (
          <SearchItem
            key={searchResult.id}
            transformedSearchResult={searchResult}
          />
        ))}
      </ul>
    </div>
  );
}

export default SearchResults;
