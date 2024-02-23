import { useEffect, useState } from "react";

import { HiOutlineFolderPlus } from "react-icons/hi2";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import TextArea from "../../ui/TextArea";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import ColorsListBox from "../../ui/ColorsListBox";
import { useForm } from "react-hook-form";
import { useCreateCategory } from "./useCreateCategory";
import { useParams } from "react-router-dom";
import Spinner from "../../ui/Spinner";

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

export default function AddCategoryForm({ onCloseModal }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const { createCategory, isLoading } = useCreateCategory(() =>
    onCloseModal(false)
  );
  const { collectionId } = useParams();

  useEffect(() => {
    register("color", { required: true });
    setValue("color", currentColor.value);
  }, [register, setValue, currentColor.value]);

  function handleColorChange(selectedColor) {
    setCurrentColor(selectedColor);
    setValue("color", selectedColor.value);
  }

  function onSubmit(data) {
    const newCategory = {
      category_name: data.title,
      description: data.description,
      color: data.color,
      collection_id: Number(collectionId),
    };
    createCategory({ newCategory });
  }

  if (isLoading) return <Spinner size="large" />;

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div className="px-5 py-5 overflow-hidden bg-white rounded-lg border border-gray-300 shadow-sm focus-within:border-rose-50 focus-within:ring-1 focus-within:ring-rose-50">
        <FormRow
          error={errors?.title?.message}
          label="title"
          labelVariation="hidden"
          inputId="title"
        >
          <Input
            {...register("title", { required: "This field is required" })}
            type="text"
            id="title"
            name="title"
            placeholder="Category title..."
            variation="noBorder"
          />
        </FormRow>
        <FormRow
          label="description"
          labelVariation="hidden"
          inputId="description"
        >
          <TextArea
            {...register("description")}
            className="block w-full resize-none px-3 border-0 py-3 text-gray-900 placeholder:text-gray-400 ring-inset focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-200 sm:text-sm sm:leading-6"
            name="description"
            placeholder="Optional category description..."
            defaultValue={""}
            id="description"
          />
        </FormRow>

        {/* Spacer element to match the height of the toolbar */}
        <div aria-hidden="true">
          <div className="py-2">
            <div className="h-9" />
          </div>
          <div className="h-px" />
          <div className="py-2">
            <div className="py-px">
              <div className="h-9" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-px bottom-0">
        {/* Actions: These are just examples to demonstrate the concept, replace/wire these up however makes sense for your project. */}
        <div className="flex flex-nowrap justify-end space-x-2 px-2 py-2 sm:px-3">
          <ColorsListBox
            colors={colors}
            currentColor={currentColor}
            setCurrentColor={handleColorChange}
          />
        </div>
        <div className="flex items-center justify-between space-x-3 border-t border-gray-200 px-2 py-4 sm:px-3">
          <div className="flex-shrink-0">
            <Button type="submit" variation="form">
              <HiOutlineFolderPlus className="w-6 h-6 mr-2 text-white" />
              <span>Create Category</span>
            </Button>
          </div>
          <div>
            <Button onClick={onCloseModal} variation="cancel">Cancel</Button>
          </div>
        </div>
      </div>
    </Form>
  );
}
