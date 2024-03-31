import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {

  const { mutate: signup, isPending: isLoading } = useMutation({
    mutationFn: signupApi,
    mutationKey: "signupMutation",
    onSuccess: () => {
   

        toast.success(
          "Account succesfully created! Please check your email to verify your account."
        );
    },
  });

  return { signup, isLoading };
}
