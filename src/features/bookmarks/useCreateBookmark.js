import { useQueryClient, useMutation } from "@tanstack/react-query";

import { createBookmark as createBookmarkApi } from "../../services/apiBookmarks";
import toast from "react-hot-toast";

export function useCreateBookmark(onSuccessCallback) {
  const queryClient = useQueryClient();

  const { mutate: createBookmark, isPending: isCreating } = useMutation({
    mutationFn: ({ newBookmark }) => createBookmarkApi(newBookmark),
    onSuccess: (data) => {
      
        const categoryId = data?.[0].category_id;
      queryClient.invalidateQueries(["bookmarks", categoryId]);
      toast.success("New bookmark added successfully");
      onSuccessCallback && onSuccessCallback();
    },
    onError: (error) => {
      console.error("Error creating this bookmark", error);
      toast.error("Error creating this bookmark");
    },
  });

  return { createBookmark, isCreating };
}
