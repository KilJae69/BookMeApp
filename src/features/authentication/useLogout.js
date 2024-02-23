import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogout() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
  const { mutate: logout, isPending: isLoading } = useMutation({
    mutationFn: () => logoutApi(),
    onSuccess: () => {
        queryClient.removeQueries(["user"])
      navigate("/login", { replace: true });
    },
    onError: (error) => {
      console.log("Error", error);
      toast.error("Error logging out");
    },
  });

  return { logout, isLoading };
}
