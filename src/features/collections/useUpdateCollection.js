import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCollection as updateCollectionApi } from "../../services/apiCollections";
import { useNavigate,useParams } from "react-router-dom";

export function useUpdateCollection() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const { collectionId:currentCollectionId } = useParams();

    const { mutate: updateCollection, isPending: isUpdating } = useMutation({
      mutationFn: ({ collectionId, newName }) =>
        updateCollectionApi(collectionId, newName),
      onSuccess: () => {
        toast.success("Collection successfully updated");
        queryClient.invalidateQueries({
          queryKey: ["collections"],
        });
      },
      onError: (err) => {
        toast.error(err.message);
      },
      onSettled: async ({ newName, collectionId }) => {
        await queryClient.invalidateQueries({
          queryKey: ["collections"],
        });
        if(Number(currentCollectionId) !== Number(collectionId)) return
        navigate(`/${collectionId}?name=${encodeURIComponent(newName)}`, {
          replace: true,
        });
      },
    });

    return { isUpdating, updateCollection };
}