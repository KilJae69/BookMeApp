import { useQuery } from "@tanstack/react-query";
import { getBookmarksAfterDate } from "../../services/apiBookmarks";

export function useFavoriteBookmarks(userId,days) {
    const includeAll = days === null; 
    const startDate = !includeAll ? new Date() : undefined;
    if (!includeAll) {
      startDate.setDate(startDate.getDate() - days);
    }

  const {
    isLoading,
    data: favoriteBookmarks,
    error,
  } = useQuery({
    queryKey: ["favoriteBookmarks", userId,days],
    queryFn: () => getBookmarksAfterDate(startDate, userId,includeAll),
    staleTime: Infinity,
    enabled: !!userId,
  });

  return { isLoading, favoriteBookmarks, error };
}
