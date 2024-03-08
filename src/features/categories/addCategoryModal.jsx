import { HiFolderPlus } from "react-icons/hi2";
import Modal from "../../components/Modals/Modal";

import ColorsListBox from "../../ui/ColorsListBox";
import TextArea from "../../ui/TextArea";
import Form from "../../ui/Form";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Input from "../../components/inputs/Input";
import { useCreateCategory } from "./useCreateCategory";

import { useParams } from "react-router-dom";

import Spinner from "../../ui/Spinner";
import useAddCategoryModalStore from "../../store/useAddCategoryModalStore";

const colors = [
  {
    name: "Default color",
    value: "default",
    background: "bg-rose-50 bg-opacity-50",
    text: "text-rose-400",
    textHover: "group-hover:text-rose-600",
  },
  {
    name: "Blue",
    value: "blue",
    background: "bg-blue-50 bg-opacity-50",
    text: "text-blue-400",
    textHover: "group-hover:text-blue-600",
  },
  {
    name: "Green",
    value: "green",
    background: "bg-green-50 bg-opacity-50",
    text: "text-green-400",
    textHover: "group-hover:text-green-600",
  },
  {
    name: "Yellow",
    value: "yellow",
    background: "bg-yellow-50 bg-opacity-50",
    text: "text-yellow-400",
    textHover: "group-hover:text-yellow-600",
  },
  {
    name: "Purple",
    value: "purple",
    background: "bg-purple-50 bg-opacity-50",
    text: "text-purple-400",
    textHover: "group-hover:text-purple-600",
  },
  {
    name: "Pink",
    value: "pink",
    background: "bg-pink-50 bg-opacity-50",
    text: "text-pink-400",
    textHover: "group-hover:text-pink-600",
  },
  {
    name: "Fuchsia",
    value: "fuchsia",
    background: "bg-fuchsia-50 bg-opacity-50",
    text: "text-fuchsia-400",
    textHover: "group-hover:text-fuchsia-600",
  },
  // More items...
];

function AddCategoryModal() {
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
  }, [
    addCategoryModal.isOpen,
    defaultColor,
    setValue,
    setCurrentColor
  ]);

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

  const bodyContent =
    isCreating ? (
      <div className="flex py-18 justify-center items-center min-h-[100px] ">
        <Spinner size="huge" />
      </div>
    ) : (
      <Form>
        <div className="px-5 py-5 overflow-hidden bg-white rounded-lg border border-gray-300 shadow-sm focus-within:border-rose-50 focus-within:ring-1 focus-within:ring-rose-50">
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
            className="block w-full rounded-md resize-none px-3 border-0 py-3 mb-6 text-gray-900 placeholder:text-gray-400 ring-inset focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-200 sm:text-sm sm:leading-6"
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
      icon={<HiFolderPlus className="text-rose-600" size={24} />}
      body={bodyContent}
      isOpen={addCategoryModal.isOpen}
      onClose={handleCloseModal}
      title="Create New Category"
    />
  );
}

export default AddCategoryModal;
