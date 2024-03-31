import { useForm } from "react-hook-form";
import Heading from "../../components/Heading";
import UpdateUserInput from "../../components/inputs/UpdateUserInput";
import Form from "../../components/Form";
import Button from "../../components/buttons/Button";
import useAuthStore from "../../store/useAuthStore";
import { useUpdateUser } from "./useUpdateUser";

function UpdateUserPasswordForm() {
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors, isDirty },
  } = useForm({
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
    mode: "onChange",
  });
  const { updateUser, isUpdating } = useUpdateUser();
  const { user } = useAuthStore();

  function onSubmit({ password }) {
    updateUser({ password }, { onSuccess: reset });
  }

  function handleCancel() {
    reset({ password: "", confirmPassword: "" });
  }

  if (user?.app_metadata.provider !== "email") return null;

  return (
    <div className=" bg-secondaryBg dark:bg-secondaryBgDark p-5 rounded-md shadow-md">
      <Heading
        className="text-lg mb-3 pb-2 text-slate-300 border-b-[1px] border-lightOutline dark:border-darkOutline"
        level={2}
      >
        Update user password
      </Heading>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-5">
          <UpdateUserInput
            disabled={isUpdating}
            id="password"
            name="password"
            type="password"
            label="New password (min. 8 characters)"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
            errors={errors}
          />
          <UpdateUserInput
            disabled={isUpdating}
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            label="Confirm password"
            {...register("confirmPassword", {
              required: "This field is required",
              validate: (value) =>
                getValues().password === value || "Passwords need to match",
            })}
            errors={errors}
          />

          <div className="self-end flex items-center gap-x-6">
            {isDirty && (
              <Button
                disabled={isUpdating}
                type="reset"
                onClick={handleCancel}
                variation="cancel"
              >
                Cancel
              </Button>
            )}
            <Button disabled={isUpdating} type="submit" variation="form">
              Update password
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default UpdateUserPasswordForm;
