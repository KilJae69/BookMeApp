import { useQueryClient, useMutation } from "@tanstack/react-query";

import { createCategory as createCategoryApi } from "../../services/apiCategories";
import toast from "react-hot-toast";

export function useCreateCategory(collectionId) {
  const queryClient = useQueryClient();

  const { mutate: createCategory, isPending:isCreating } = useMutation({
    mutationFn: ({ newCategory }) => createCategoryApi(newCategory),
    onSuccess: () => {
      queryClient.invalidateQueries(["categories", collectionId]);
      toast.success("Category created successfully");
     
    },
    onError: (error) => {
      console.error("Error creating category", error);
      toast.error("Error creating category");
    },
  });


  return { createCategory, isCreating };
}
