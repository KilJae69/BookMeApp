import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useLogin } from "./useLogin";
import SpinnerMini from "../../ui/Spinner";


function LoginForm() {
  const [email, setEmail] = useState("adi.toromanovic@outlook.com");
  const [password, setPassword] = useState("12345678");
  const { login, isLoading } = useLogin();
  

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }
  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="Email" inputId="email">
        <Input
          value={email}
          type="text"
          id="email"
          name="email"
          autoComplete="email"
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
      </FormRow>

      <FormRow label="Password" inputId="password">
        <Input
          value={password}
          type="password"
          id="password"
          name="password"
          autoComplete="new-password"
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
      </FormRow>

      <FormRow>
        <Button type="submit" variation="form" disabled={isLoading}>
          {!isLoading ? "Log in" : <SpinnerMini />}
        </Button>
      </FormRow>
    </Form>
  );
}

export default LoginForm;
