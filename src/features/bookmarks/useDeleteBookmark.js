import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBookmark as deleteBookmarkApi } from "../../services/apiBookmarks";
import toast from "react-hot-toast";

export function useDeleteBookmark(collectionId, onSuccessCallback) {
  const queryClient = useQueryClient();
  const { mutate: deleteBookmark, isPending: isDeleting } = useMutation({
    mutationFn: (bookmarkId) => deleteBookmarkApi(bookmarkId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["categories", Number(collectionId)],
      });
      toast.success("Bookmark deleted");
      if (onSuccessCallback) onSuccessCallback();
    },
    onError: (error) => {
      toast.error("Error deleting bookmark");
      console.error("Error deleting bookmark:", error);
    },
  });

  return { deleteBookmark, isDeleting };
}
