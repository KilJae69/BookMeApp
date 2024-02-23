import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginWithGithub as loginWithGithubApi } from "../../services/apiAuth"; // Adjust the import path as needed
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useGithubLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: loginWithGithub, isPending:isLoading, } = useMutation({
    mutationFn: loginWithGithubApi,
    onSuccess: (data) => {
      // Assuming `data` contains the user session information you need
      // You might need to adjust this based on the actual structure of the response
      console.log(data,"Github login success - mutation")
      queryClient.setQueryData(["user"], data.session.user);
      navigate("/dashboard", { replace: true });
    },
    onError: (error) => {
      console.error("Error logging in with GitHub", error);
      toast.error("GitHub login failed. Please try again.");
    },
  });

  return { loginWithGithub, isLoading };
}
