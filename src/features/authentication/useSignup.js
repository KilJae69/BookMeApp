import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {

  const {
    mutate: signup,
    isPending: isLoading,
    error,
    isSuccess,
  } = useMutation({
    mutationFn: signupApi,
    mutationKey: "signupMutation",
    onSuccess: () => {
      toast.success(
        "Account succesfully created! Please check your email to verify your account."
      );
    },
    onError: (error) => {
     console.log(error)
      
      if (error.status === 429) {
        toast.error("Too many requests. Please try again later.");
      } else {
        toast.error(`Signup failed: ${error.message}`);
      
      }
    },
  });

  return { signup, isLoading,error,isSuccess };
}
