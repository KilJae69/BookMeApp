import { useQuery } from "@tanstack/react-query";
import { getCollections } from "../../services/apiCollections";
import { useUser } from "../authentication/useUser";

export function useCollections() {

  const {user} = useUser()
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
