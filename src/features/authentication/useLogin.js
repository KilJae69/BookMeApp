import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAuthStore from "../../store/useAuthStore";
import { getCollections } from "../../services/apiCollections";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isPending: isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: async (data) => {
      
      const user = data.user;
       useAuthStore.getState().setUser(user);
       queryClient.setQueryData(["user"], user);

       const collections = await getCollections(user.id);

      if (collections && collections.length > 0)
        navigate(
          `/${collections[0].id}?name=${encodeURIComponent(
            collections[0].collection_name
          )}`,
          { replace: true }
        );
    },
    onError: (error) => {
      console.log("Error", error);
      toast.error("Provided credentials are invalid. Please try again.");
    },
  });
  return { login, isLoading };
}
