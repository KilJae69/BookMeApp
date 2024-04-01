import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {

  const {
    mutate: signup,
    isPending: isLoading,
    error,
  } = useMutation({
    mutationFn: signupApi,
    mutationKey: "signupMutation",
    onSuccess: () => {
      toast.success(
        "Account succesfully created! Please check your email to verify your account."
      );
    },
    onError: (error) => {
     
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "An unexpected error occurred";
      if (error.status === 429) {
        toast.error("Too many requests. Please try again later.");
      } else {
        toast.error(`Signup failed: ${errorMessage}`);
      }
    },
  });

  return { signup, isLoading,error };
}
