import { useQuery } from "@tanstack/react-query";
import { searchBookmarks } from "../../services/apiBookmarks";
import useSearchStore from "../../store/useSearchStore";
import { useEffect } from "react";

export function useSearchBookmarks(searchTerm) {
    const {setIsLoading, setSearchedBookmarks} = useSearchStore();
  const {
    isLoading,
    data: searchedBookmarks,
    error,
  } = useQuery({
    queryKey: ["searchBookmarks", searchTerm],
    queryFn: () => searchBookmarks(searchTerm),
    enabled: !!searchTerm,
  });

   useEffect(() => {
       setIsLoading(isLoading);
    setSearchedBookmarks(searchedBookmarks);
   }, [isLoading, setIsLoading,setSearchedBookmarks, searchedBookmarks]);

  return { isLoading, searchedBookmarks, error };
}
