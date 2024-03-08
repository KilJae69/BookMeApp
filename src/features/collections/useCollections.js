import { useQuery } from "@tanstack/react-query";
import { getCollections } from "../../services/apiCollections";

import useAuthStore from "../../store/useAuthStore";

export function useCollections() {

  const {user} = useAuthStore()
  const userId = user?.id

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
