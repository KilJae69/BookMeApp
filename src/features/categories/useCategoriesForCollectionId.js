import { useQuery } from "@tanstack/react-query";
import { getCategoriesByCollectionId as getCategoriesByCollectionIdApi } from "../../services/apiCategories";


export function useCategoriesByCollectionId(collectionId) {
  const {
    isLoading,
    data: categories,
    error,
  } = useQuery({
    queryKey: ["categories", Number(collectionId)],
    queryFn: () =>
      collectionId
        ? getCategoriesByCollectionIdApi(collectionId)
        : Promise.reject("Invalid collection ID"),
    enabled: !!collectionId, 
    staleTime: Infinity, 
    onError: (error) => {
      console.error("Error fetching categories:", error);
    },
  });

  return { isLoading, categories, error };
}
