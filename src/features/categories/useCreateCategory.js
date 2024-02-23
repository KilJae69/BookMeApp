import { useQueryClient, useMutation } from "@tanstack/react-query";

import { createCategory as createCategoryApi } from "../../services/apiCategories";
import toast from "react-hot-toast";

export function useCreateCategory(onSuccessCallback) {
  const queryClient = useQueryClient();

  const { mutate: createCategory, status } = useMutation({
    mutationFn: ({ newCategory }) => createCategoryApi(newCategory),
    onSuccess: (data) => {
      queryClient.invalidateQueries(["categories"]);
      toast.success("Category created successfully");
      if (onSuccessCallback) onSuccessCallback(data);
    },
    onError: (error) => {
      console.error("Error creating category", error);
      toast.error("Error creating category");
    },
  });

  const isLoading = status === "loading";

  return { createCategory, isLoading };
}
