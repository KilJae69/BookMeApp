import { useForm } from "react-hook-form";
import Button from "../../components/buttons/Button";
import Form from "../../ui/Form";

import { useSignup } from "./useSignup";
import SpinnerMini from "../../ui/Spinner";
import Input from "../../components/inputs/Input";


function SignupForm() {
  const { signup, isLoading } = useSignup();
  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit,
    reset,
  } = useForm();

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
      <Input
        id="email"
        name="email"
        label="Email"
        type="email"
        disabled={isLoading}
        register={register}
        validationRules={{
          required: "Email is required",
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Invalid email address",
          },
        }}
        errors={errors}
      />
      <Input
        id="username"
        name="username"
        label="Username"
        type="text"
        disabled={isLoading}
        register={register}
        validationRules={{
          required: "This field required",
        }}
        errors={errors}
      />
      <Input
        id="password"
        name="password"
        label="Password (min 8 characters)"
        type="password"
        disabled={isLoading}
        register={register}
        validationRules={{
          required: "This field required",
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters long",
          },
        }}
        errors={errors}
      />
      <Input
        id="confirmPassword"
        name="confirmPassword"
        label="Confirm password"
        type="password"
        disabled={isLoading}
        register={register}
        validationRules={{
          required: "This field required",
          validate: (value) =>
            value === getValues().password || "The passwords do not match",
        }}
        errors={errors}
      />

        <Button
          className="flex w-full justify-center"
          variation="form"
          type="submit"
          disabled={isLoading}
        >
          {!isLoading ? "Sign up" : <SpinnerMini />}
        </Button>

    </Form>
  );
}

export default SignupForm;
