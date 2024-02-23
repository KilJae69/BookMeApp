import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCollection as deleteCollectionApi } from "../../services/apiCollections";
import toast from "react-hot-toast";

export function useDeleteCollection() {
  const queryClient = useQueryClient();
  const { mutate: deleteCollection, isPending: isDeleting } = useMutation({
    mutationFn: (collectionId) => deleteCollectionApi(collectionId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["collections"],
      });
      toast.success("Collection deleted");
    },
  });

  return { deleteCollection, isDeleting };
}
