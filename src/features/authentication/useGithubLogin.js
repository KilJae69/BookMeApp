import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { loginWithGithub as loginWithGithubApi } from "../../services/apiAuth"; 

export function useGithubLogin() {

  const { mutate: loginWithGithub, isPending:isLoading, } = useMutation({
    mutationFn: loginWithGithubApi,
    onSuccess:  () => {
    
      toast.success("GitHub login initiated. Redirecting...");
      
    },
    onError: (error) => {
      console.error("Error logging in with GitHub", error);
      toast.error("GitHub login failed. Please try again.");
    },
  });

  return { loginWithGithub, isLoading };
}
