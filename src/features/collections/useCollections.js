import { useQuery } from "@tanstack/react-query";
import { getCollections } from "../../services/apiCollections";


export function useCollections(userId) {


  const {
    isLoading,
    data: collections,
    error,
  } = useQuery({
    queryKey: ["collections",userId],
    queryFn: ()=>getCollections(userId),
    staleTime: Infinity,
    enabled: !!userId,
  });

  return { isLoading, collections, error };
}
