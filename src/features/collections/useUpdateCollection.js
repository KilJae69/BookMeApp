import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCollection as updateCollectionApi } from "../../services/apiCollections";

export function useUpdateCollection() {
    const queryClient = useQueryClient();

    const { mutate: updateCollection, isPending: isUpdating } = useMutation({
        mutationFn: ({ collectionId, newName }) => updateCollectionApi(collectionId, newName),
        onSuccess: () => {
            toast.success("Collection successfully updated");
            queryClient.invalidateQueries({
                queryKey: ["collections"],
            });
        },
        onError: (err) => {
            toast.error(err.message);
        },
    });

    return { isUpdating, updateCollection };
}