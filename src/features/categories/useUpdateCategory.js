
import toast from "react-hot-toast";
import { updateCategory as updateCategoryApi } from "../../services/apiCategories";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useUpdateCategory(collectionId) {
  const queryClient = useQueryClient();

  const { mutate: updateCategory,isPending:isUpdating} = useMutation({
    mutationFn: ({ categoryId, updatedCategory }) =>
      updateCategoryApi(categoryId, updatedCategory),
    onSuccess: () => {
      toast.success("Category successfully updated");
      queryClient.invalidateQueries({
        queryKey: ["categories", Number(collectionId)],
      });

    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isUpdating, updateCategory };
}
