import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useSignup } from "./useSignup";
import SpinnerMini from "../../ui/Spinner";

function SignupForm() {
  const { signup, isLoading } = useSignup();
  const { register, formState:{errors}, getValues, handleSubmit, reset } = useForm();


  function onSubmit({ email, username, password }) {
    signup(
      { email, username, password },
      {
        onSettled: reset,
      }
    );
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow
        label="Username"
        inputId="username"
        error={errors?.username?.message}
      >
        <Input
          type="text"
          id="username"
          name="username"
          autoComplete="username"
          disabled={isLoading}
          {...register("username", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow
        label="Email address"
        inputId="email"
        error={errors?.email?.message}
      >
        <Input
          type="text"
          id="email"
          name="email"
          autoComplete="email"
          disabled={isLoading}
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please enter a valid email address",
            },
          })}
        />
      </FormRow>

      <FormRow
        inputId="password"
        label="Password (min 8 characters)"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          name="password"
          autoComplete="new-password"
          disabled={isLoading}
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Confirm password"
        error={errors?.confirmPassword?.message}
        inputId="confirmPassword"
      >
        <Input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          disabled={isLoading}
          {...register("confirmPassword", {
            required: "This field is required",
            validate: (value) =>
              value === getValues().password || "The passwords do not match",
          })}
        />
      </FormRow>

      <FormRow>
        <Button
          className="flex w-full justify-center"
          variation="form"
          type="submit"
          disabled={isLoading}
        >
          {!isLoading ? "Sign up" : <SpinnerMini />}
        </Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
