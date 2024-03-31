import { useMutation } from "@tanstack/react-query";
import { loginWithGoogle as loginWithGoogleApi } from "../../services/apiAuth";

import toast from "react-hot-toast";

export function useGoogleLogin() {
  const { mutate: loginWithGoogle, isPending: isLoading } = useMutation({
    mutationFn: loginWithGoogleApi,
    onSuccess: () => {
     
      toast.success("Google login initiated. Redirecting...");
    },
    onError: (error) => {
      console.error("Error logging in with Google", error);
      toast.error("GitHub login failed. Please try again.");
    },
  });

  return { loginWithGoogle, isLoading };
}
