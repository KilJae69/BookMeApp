import { GiBookmark } from "react-icons/gi";
import Modal from "../../components/Modals/Modal";

import Form from "../../components/Form";
import Input from "../../components/inputs/Input";
import TextArea from "../../components/inputs/TextArea";
import { useForm } from "react-hook-form";
import { memo, useEffect } from "react";
import useAddBookmarkModalStore from "../../store/useAddBookmarkModalStore";
import useFetchMetadata from "../../hooks/useFetchMetadata";
import { useCreateBookmark } from "./useCreateBookmark";
import Spinner from "../../components/Spinner";
import { formatInputForFetch as formatUrlForStorage } from "../../helpers/formatInputForFetch";
import useAuthStore from "../../store/useAuthStore";

const AddBookmarkModal = memo(function AddBookmarkModal() {
  const { user } = useAuthStore();
  const userId = user?.id;
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
    watch,
  } = useForm();
  const addBookmarkModal = useAddBookmarkModalStore();
  const { metadata, isFetching, fetchMetadata, setMetadata } =
    useFetchMetadata();
  const { createBookmark, isCreating } = useCreateBookmark(handleClose);

  const defaultFavicon = "/globe-grid.svg";
  const url = watch("url");

  const handleUrlBlur = () => {
    if (!url) return;
    fetchMetadata(url);
  };

  function handleClose() {
    reset();
    setMetadata({});
    addBookmarkModal.onClose();
  }

  useEffect(() => {
    if (metadata.title) {
      setValue("title", metadata.title);
    }
  }, [metadata, setValue, url]);

  function onSubmit(formData) {
    const formattedUrlforStorage = formatUrlForStorage(formData.url);
    const newBookmark = {
      ...formData,
      url: formattedUrlforStorage,
      favicon: metadata?.icon || metadata.image || defaultFavicon,
      category_id: addBookmarkModal.categoryId,
      user_id: userId,
    };
    createBookmark({ newBookmark });
    setMetadata({});
  }

  const bodyContent = !isCreating ? (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div className=" flex flex-col gap-2 px-5 py-5 overflow-hidden bg-secondaryBg dark:bg-secondaryBgDark rounded-lg border border-gray-300 shadow-sm focus-within:border-rose-50 focus-within:ring-1 focus-within:ring-rose-50">
        <Input
          id="url"
          name="url"
          label="Bookmark URL"
          type="url"
          register={register}
          disabled={isFetching || isCreating}
          onBlur={handleUrlBlur}
          validationRules={{
            required: "URL is required",
          }}
          errors={errors}
        />

        <Input
          id="title"
          name="title"
          label="Bookmark Name"
          type="text"
          disabled={isFetching || isCreating}
          register={register}
          validationRules={{
            required: "This field is required",
          }}
          errors={errors}
        />

        <TextArea
          {...register("description")}
          className="block w-full rounded-md text-sm resize-none px-3 border-0 py-3 mb-6 text-textPrimary900 placeholder:text-textPrimary400 ring-inset focus:outline-none focus:ring-2 focus:ring-inset focus:ring-lightOutline dark:focus:ring-darkOutline dark:bg-secondaryBgDark dark:text-white sm:leading-6"
          name="description"
          placeholder="Optional bookmark description..."
          defaultValue={""}
          id="description"
          disabled={isFetching || isCreating}
        />
      </div>
    </Form>
  ) : (
    <div className="flex py-18 justify-center items-center min-h-[100px] ">
      <Spinner size="huge" />
    </div>
  );
  return (
    <Modal
      onSubmit={handleSubmit(onSubmit)}
      icon={
        <GiBookmark
          className="text-primary600 dark:text-primaryDark600"
          size={24}
        />
      }
      disabled={isFetching || isCreating}
      body={bodyContent}
      isOpen={addBookmarkModal.isOpen}
      onClose={handleClose}
      title="Create a new bookmark"
    />
  );
});

export default AddBookmarkModal;
