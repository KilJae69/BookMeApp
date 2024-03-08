import Modal from "../../components/Modals/Modal";
import useAddCollectionModalStore from "../../store/useAddCollectionModalStore";
import Form from "../../ui/Form";
import Input from "../../components/inputs/Input";
import { useForm } from "react-hook-form";
import { HiFolderPlus } from "react-icons/hi2";
import useAuthStore from "../../store/useAuthStore";
import { useCreateCollection } from "./useCreateCollection";
import Spinner from "../../ui/Spinner";

function AddCollectionModal() {
  const addCollectionModal = useAddCollectionModalStore();
  const { createCollection, isLoading } = useCreateCollection();
  const { user } = useAuthStore();

  const userId = user?.id;

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    // Destructure collection_name from the form data
    const { collection_name } = data;
    await createCollection({
      newCollection: { collection_name, user_id: userId },
    });
    reset(); // Reset form fields
    !isLoading && addCollectionModal.onClose(); // Close modal after submission
  };

  const bodyContent = isLoading ? (
    <div className="flex py-18 justify-center items-center min-h-[100px] ">
      <Spinner size="huge" />
    </div>
  ) : (
    <Form>
      <Input
        id="collection_name"
        name="collection_name"
        label="Collection Name"
        type="text"
        register={register}
        validationRules={{
          required: "This field is required",
        }}
        errors={errors}
        disabled={isLoading}
      />
    </Form>
  );

  return (
    <Modal
      onSubmit={handleSubmit(onSubmit)}
      icon={<HiFolderPlus className="text-rose-600" size={24} />}
      body={bodyContent}
      isOpen={addCollectionModal.isOpen}
      onClose={addCollectionModal.onClose}
      title="Create New Collection"
    />
  );
}

export default AddCollectionModal;
