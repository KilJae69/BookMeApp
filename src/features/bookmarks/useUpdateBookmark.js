import toast from "react-hot-toast";
import { updateBookmark as updateBookmarkApi } from "../../services/apiBookmarks";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useUpdateBookmark() {
  const queryClient = useQueryClient();

  const { mutate: updateBookmark, isPending: isUpdating } = useMutation({
    mutationFn: ({ bookmarkId, updatedBookmark }) =>
      updateBookmarkApi(bookmarkId, updatedBookmark),
    onSuccess: (data) => {
      console.log("Bookmark updated", data)
      toast.success("Bookmark successfully updated");
      queryClient.invalidateQueries({
        queryKey: ["bookmarks", data[0].category_id],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isUpdating, updateBookmark };
}
