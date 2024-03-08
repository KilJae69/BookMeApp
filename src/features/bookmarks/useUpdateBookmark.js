import toast from "react-hot-toast";
import { updateBookmark as updateBookmarkApi } from "../../services/apiBookmarks";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useUpdateBookmark(collectionId) {
  const queryClient = useQueryClient();

  const { mutate: updateBookmark, isPending: isUpdating } = useMutation({
    mutationFn: ({ bookmarkId, updatedBookmark }) =>
      updateBookmarkApi(bookmarkId, updatedBookmark),
    onSuccess: () => {
      toast.success("Bookmark successfully updated");
      queryClient.invalidateQueries({
        queryKey: ["categories", Number(collectionId)],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isUpdating, updateBookmark };
}
