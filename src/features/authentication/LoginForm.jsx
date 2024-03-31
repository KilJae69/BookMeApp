
import Button from "../../components/buttons/Button";
import Form from "../../components/Form";
import { useLogin } from "./useLogin";
import Spinner from "../../components/Spinner";
import Input from "../../components/inputs/Input";
import { useForm } from "react-hook-form";


function LoginForm() {
   const {
     register,
     formState: { errors },
     handleSubmit,
   } = useForm();

  const { login, isLoading } = useLogin();
  

  function onSubmit(data) {
   const { email, password } = data;
    login({ email, password });
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
        id="password"
        name="password"
        label="Password"
        type="password"
        disabled={isLoading}
        register={register}
        validationRules={{
          required: "This field required",
        }}
        errors={errors}
      />

      <Button type="submit" variation="form" disabled={isLoading}>
        {!isLoading ? "Log in" : <Spinner size="small" />}
      </Button>
    </Form>
  );
}

export default LoginForm;
