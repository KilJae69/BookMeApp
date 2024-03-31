import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCollection as createCollectionApi } from "../../services/apiCollections";
import toast from "react-hot-toast";
import useAuthStore from "../../store/useAuthStore";

export function useCreateCollection() {
  const queryClient = useQueryClient();
  const { user } = useAuthStore();
  const userId = user?.id;
  

  const { mutate: createCollection, isPending: isLoading } = useMutation({
    mutationFn: ({ newCollection }) => createCollectionApi(newCollection),
    onSuccess: (data) => {
      
      
      queryClient.invalidateQueries(["collections", userId]);
      toast.success(
        `Collection "${data[0].collection_name}" created successfully`
      );

    },

    onError: (error) => {
      console.error("Error creating collection", error);
      toast.error("Error creating collection");
    },
  });

  return { createCollection, isLoading };
}
