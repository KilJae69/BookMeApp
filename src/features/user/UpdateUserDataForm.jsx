import { useEffect } from "react";
import UpdateUserInput from "../../components/inputs/UpdateUserInput";
import Form from "../../components/Form";
import Heading from "../../components/Heading";
import Button from "../../components/buttons/Button";
import FileInput from "../../components/inputs/FileInput";
import useAuthStore from "../../store/useAuthStore";
import { useUpdateUser } from "./useUpdateUser";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function UpdateUserDataForm() {
  const { user } = useAuthStore();
  const { updateUser, isUpdating } = useUpdateUser();

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    setValue,
    reset,
  } = useForm({
    defaultValues: {
      username: user?.user_metadata?.username,
    },
    mode: "onChange",
  });

  useEffect(() => {
    reset({
      username: user.user_metadata?.username || "",
    });
  }, [user, reset]);

  const onSubmit = (data) => {
    if (data.username !== user.user_metadata.username || data.avatar) {
      updateUser({
        username: data.username,
        avatar: data.avatar,
      });
      reset();
    }

    if (data.username === user.user_metadata.username && !data.avatar)
      toast.error("No changes detected");
  };

  const handleCancel = () => {
    reset({
      username: user?.user_metadata?.username,
    });
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setValue("avatar", file, { shouldValidate: true });
    }
  };

  return (
    <div className=" bg-secondaryBg dark:bg-secondaryBgDark p-5 rounded-md shadow-md">
      <Heading
        className="text-lg mb-3 pb-2 text-slate-300 border-b-[1px] border-lightOutline dark:border-darkOutline"
        level={2}
      >
        Update user data
      </Heading>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-5">
          <UpdateUserInput
            id="email"
            name="email"
            type="email"
            label="Email address"
            disabled={true}
            value={user?.email}
            {...register("email")}
          />
          <UpdateUserInput
            id="username"
            name="username"
            type="text"
            label="Username"
            errors={errors}
            disabled={isUpdating}
            {...register("username", {
              required: "Username is required",
            })}
          />
          <FileInput
            id="file"
            label="Avatar photo"
            onChange={handleAvatarChange}
            disabled={isUpdating}
            accept="image/*"
          />
          <div className="  self-end flex items-center gap-x-6">
            {isDirty && (
              <Button
                disabled={isUpdating}
                onClick={handleCancel}
                variation="cancel"
              >
                Cancel
              </Button>
            )}

            <Button disabled={isUpdating} type="submit" variation="form">
              Update user data
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default UpdateUserDataForm;
