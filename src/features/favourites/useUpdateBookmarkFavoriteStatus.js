import toast from "react-hot-toast";
import { updateBookmarkFavoriteStatus as updateBookmarkFavoriteStatusApi } from "../../services/apiBookmarks";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useUpdateBookmarkFavoriteStatus() {
  const queryClient = useQueryClient();

  const { mutate: updateBookmarkFavoriteStatus, isLoading: isUpdating } =
    useMutation({
      mutationFn: ({ bookmarkId, isFavorite }) =>
        updateBookmarkFavoriteStatusApi(bookmarkId, isFavorite),
      onSuccess: (data) => {
        console.log(data)
        // Assuming the API returns the updated bookmark, including its category_id
        // This would re-fetch bookmarks and any other queries that need to be updated
        toast.success("Bookmark favorite status updated");
        queryClient.invalidateQueries(["favoriteBookmarks"]);
      },
      onError: (error) => {
        // Handle error state
        toast.error(error.message);
      },
    });

  return { updateBookmarkFavoriteStatus, isUpdating };
}