import { useQuery } from "@tanstack/react-query";
import { getBookmarksByCategoryId } from "../../services/apiBookmarks";

//#Not used in this project
export function useBookmarksByCategoryId(categoryId) {
  const {
    data: bookmarks,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["bookmarks", Number(categoryId)],
    queryFn: () => getBookmarksByCategoryId(categoryId),
    enabled: !!categoryId,
    staleTime: Infinity,
    onError: (error) => {
      console.error("Error fetching bookmarks:", error);
    },
  });
  return { bookmarks, error, isLoading };
}
