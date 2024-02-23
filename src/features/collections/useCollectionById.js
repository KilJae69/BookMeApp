import { useQuery } from "@tanstack/react-query";
import { getCollectionById as getCollectionByIdApi } from "../../services/apiCollections";


export function useCollectionById(validCollectionId) {
 const {
    isLoading,
    data: collection,
    error,
  } = useQuery({
    queryKey: ['collection', validCollectionId],
    queryFn: () => (validCollectionId ? getCollectionByIdApi(validCollectionId):Promise.reject("Invalid collection ")),
    enabled: !!validCollectionId, 
    staleTime: Infinity, 
  });

  return { isLoading, collection, error };
} 