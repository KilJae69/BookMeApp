import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useUser } from "../authentication/useUser";
import { createCollection as createCollectionApi } from "../../services/apiCollections";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useCreateCollection() {
  const queryClient = useQueryClient();
  const { user } = useUser();
  const userId = user?.id;
  const navigate = useNavigate();

  const { mutate: createCollection, isPending: isLoading } = useMutation({
    mutationFn: ({ newCollection }) => createCollectionApi(newCollection),
    onSuccess: (data) => {
      const collectionId = data[0].id;
      console.log(data);
      queryClient.invalidateQueries(["collections", userId]);
      toast.success(
        `Collection "${data[0].collection_name}" created successfully`
      );
      navigate(`/dashboard/${collectionId}`);
    },

    onError: (error) => {
      console.error("Error creating collection", error);
      toast.error("Error creating collection");
    },
  });

  return { createCollection, isLoading };
}
