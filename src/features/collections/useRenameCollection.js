import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { renameCollection as renameCollectionApi } from "../../services/apiCollections";

export function useRenameCollection() {
    const queryClient = useQueryClient();

    const { mutate: renameCollection, isPending: isRenaming } = useMutation({
        mutationFn: ({ collectionId, newName }) => renameCollectionApi(collectionId, newName),
        onSuccess: () => {
            toast.success("Collection successfully renamed");
            queryClient.invalidateQueries({
                queryKey: ["collections"],
            });
        },
        onError: (err) => {
            toast.error(err.message);
        },
    });

    return { isRenaming, renameCollection };
}