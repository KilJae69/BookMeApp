import { HiFolderPlus } from "react-icons/hi2";
import Modal from "../../components/Modals/Modal";

import ColorsListBox from "../../components/ColorsListBox";
import TextArea from "../../components/inputs/TextArea";
import Form from "../../components/Form";
import { useForm } from "react-hook-form";
import { memo, useEffect, useState } from "react";
import Input from "../../components/inputs/Input";
import { useCreateCategory } from "./useCreateCategory";

import { useParams } from "react-router-dom";

import Spinner from "../../components/Spinner";
import useAddCategoryModalStore from "../../store/useAddCategoryModalStore";
import { colors } from "../../data/colorsData";

const AddCategoryModal = memo(function AddCategoryModal() {
  const { collectionId } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm();
  const addCategoryModal = useAddCategoryModalStore();
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const defaultColor =
    colors.find((color) => color.value === "default") || colors[0];
  const { createCategory, isCreating } = useCreateCategory(collectionId);

  useEffect(() => {
    if (addCategoryModal.isOpen) {
      setCurrentColor(defaultColor);
      setValue("color", defaultColor.value);
    }
  }, [addCategoryModal.isOpen, defaultColor, setValue, setCurrentColor]);

  useEffect(() => {
    register("color", { required: true });
    setValue("color", currentColor.value);
  }, [register, setValue, currentColor.value]);

  function handleColorChange(selectedColor) {
    setCurrentColor(selectedColor);
    setValue("color", selectedColor.value);
  }

  const handleCloseModal = () => {
    addCategoryModal.onClose();
    reset();
    setCurrentColor(defaultColor);
  };

  async function onSubmit(data) {
    const newCategory = {
      category_name: data.title,
      description: data.description,
      color: data.color,
      collection_id: Number(collectionId),
    };
    await createCategory({ newCategory });
    handleCloseModal();
  }

  const bodyContent = isCreating ? (
    <div className="flex py-18 justify-center items-center min-h-[100px] ">
      <Spinner size="huge" />
    </div>
  ) : (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div className="px-5 py-5 overflow-hidden bg-secondaryBg dark:bg-secondaryBgDark rounded-lg border border-gray-300 shadow-sm focus-within:border-rose-50 focus-within:ring-1 focus-within:ring-rose-50">
        <Input
          id="title"
          name="title"
          label="Category Name"
          type="text"
          disabled={isCreating}
          register={register}
          validationRules={{
            required: "This field is required",
          }}
          errors={errors}
        />

        <TextArea
          {...register("description")}
          className="my-2 block w-full rounded-md text-sm resize-none px-3 border-0 py-3 mb-6 text-textPrimary900 placeholder:text-textPrimary400 ring-inset focus:outline-none focus:ring-2 focus:ring-inset focus:ring-lightOutline dark:focus:ring-darkOutline sm:text-sm sm:leading-6 dark:bg-secondaryBgDark dark:text-white"
          name="description"
          placeholder="Optional category description..."
          defaultValue={""}
          id="description"
        />
      </div>

      <div className="absolute inset-x-px bottom-0">
        <div className="flex flex-nowrap justify-end space-x-2 px-2 py-2 sm:px-3">
          <ColorsListBox
            colors={colors}
            currentColor={currentColor}
            setCurrentColor={handleColorChange}
          />
        </div>
      </div>
    </Form>
  );

  return (
    <Modal
      onSubmit={handleSubmit(onSubmit)}
      icon={
        <HiFolderPlus
          className="text-primary600 dark:text-primaryDark600"
          size={24}
        />
      }
      body={bodyContent}
      isOpen={addCategoryModal.isOpen}
      onClose={handleCloseModal}
      title="Create New Category"
    />
  );
});

export default AddCategoryModal;
