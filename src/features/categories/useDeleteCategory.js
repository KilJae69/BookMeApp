import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCategory as deleteCategoryApi } from "../../services/apiCategories";
import toast from "react-hot-toast";

export function useDeleteCategory(collectionId, onSuccessCallback) {
  const queryClient = useQueryClient();
  const { mutate: deleteCategory, isPending: isDeleting } = useMutation({
    mutationFn: (categoryId) => deleteCategoryApi(categoryId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["categories", collectionId],
      });
      toast.success("Category deleted");
      if (onSuccessCallback) onSuccessCallback();
    },
  });

  return { deleteCategory, isDeleting };
}
