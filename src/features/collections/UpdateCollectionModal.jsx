import { useForm } from "react-hook-form";
import { FaRegEdit } from "react-icons/fa";
import { memo, useEffect } from "react";

import Modal from "../../components/modals/Modal";
import { useUpdateCollection } from "./useUpdateCollection";
import Input from "../../components/inputs/Input";
import Form from "../../components/Form";
import Spinner from "../../components/Spinner";
import useUpdateCollectionModalStore from "../../store/useUpdateCollectionModalStore";

const UpdateCollectionModal = memo(function UpdateCollectionModal() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();
  const updateCollectionModal = useUpdateCollectionModalStore();
  const { isUpdating: isLoading, updateCollection } = useUpdateCollection();

  useEffect(() => {
    setValue("collection_name", updateCollectionModal.collectionName);
  }, [updateCollectionModal.collectionName, setValue]);

  const onSubmit = async (data) => {
    if (updateCollectionModal.collectionName === data.collection_name) return;
    await updateCollection({
      collectionId: updateCollectionModal.collectionId,
      newName: data.collection_name,
    });
    reset();
    !isLoading && updateCollectionModal.onClose();
  };

  const bodyContent = isLoading ? (
    <div className="flex py-18 justify-center items-center min-h-[100px] ">
      <Spinner size="huge" />
    </div>
  ) : (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        id="collection_name"
        name="collection_name"
        label="Collection Name"
        type="text"
        register={register}
        validationRules={{
          required: "Collection name is required",
          validate: {
            nameChanged: (value) =>
              value !== updateCollectionModal.collectionName ||
              "Please change the collection name.",
          },
        }}
        errors={errors}
        disabled={isLoading}
      />
    </Form>
  );

  return (
    <Modal
      onSubmit={handleSubmit(onSubmit)}
      icon={
        <FaRegEdit className="text-primary600 dark:text-primaryDark600 h-7 w-7" />
      }
      body={bodyContent}
      isOpen={updateCollectionModal.isOpen}
      onClose={updateCollectionModal.onClose}
      title="Edit Collection"
    />
  );
});

export default UpdateCollectionModal;
