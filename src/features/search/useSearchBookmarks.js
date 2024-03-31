import { useQuery } from "@tanstack/react-query";
import { searchBookmarks } from "../../services/apiBookmarks";
import useSearchStore from "../../store/useSearchStore";
import { useEffect } from "react";
import useAuthStore from "../../store/useAuthStore";


export function useSearchBookmarks() {
  const {user} = useAuthStore()
  const userId = user?.id
  const { setIsLoading, setSearchedBookmarks,searchTerm } = useSearchStore();

  const {
    isLoading,
    data: searchedBookmarks,
    error,
  } = useQuery({
    queryKey: ["searchBookmarks", searchTerm, userId],
    queryFn: () => searchBookmarks(searchTerm,userId),
    enabled: !!userId && !!searchTerm,
  });

  useEffect(() => {
    setIsLoading(isLoading);
    setSearchedBookmarks(searchedBookmarks || []);
  }, [
    isLoading,
    setIsLoading,
    setSearchedBookmarks,
    searchedBookmarks,
  ]);

  return { isLoading, searchedBookmarks, error };
}
