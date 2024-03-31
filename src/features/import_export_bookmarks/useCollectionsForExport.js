import { useQuery } from "@tanstack/react-query";
import { getCollectionsForExport } from "../../services/apiCollections";

export function useCollectionsForExport(userId) {
  const {
    isLoading,
    data: collectionsForExport,
    error,
  } = useQuery({
    queryKey: ["collectionsForExport", userId],
    queryFn: () => getCollectionsForExport(userId),
    staleTime: Infinity,
    enabled: !!userId,
  });

  return { isLoading, collectionsForExport, error };
}
