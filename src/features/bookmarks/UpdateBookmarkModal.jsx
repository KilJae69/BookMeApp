import { GiBookmark } from "react-icons/gi";
import Modal from "../../components/Modals/Modal";

import TextArea from "../../components/inputs/TextArea";
import Form from "../../components/Form";
import { useForm } from "react-hook-form";
import { memo, useEffect } from "react";
import Input from "../../components/inputs/Input";

import useUpdateBookmarkModalStore from "../../store/useUpdateBookmarkModalStore";
import Spinner from "../../components/Spinner";
import { useUpdateBookmark } from "./useUpdateBookmark";
import useFetchMetadata from "../../hooks/useFetchMetadata";
import { formatInputForFetch as formatUrlForStorage } from "../../helpers/formatInputForFetch";

const UpdateBookmarkModal = memo(function UpdateBookmarkModal() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
    watch,
  } = useForm();
  const updateBookmarkModal = useUpdateBookmarkModalStore();
  const { updateBookmark, isUpdating } = useUpdateBookmark();
  const { metadata, isFetching, fetchMetadata } = useFetchMetadata();
  const defaultFavicon = "/globe-grid.svg";

  const url = watch("url");

  const handleUrlBlur = () => {
    if (!url || url === updateBookmarkModal.bookmarkData.url) return;

    fetchMetadata(url);
  };

  useEffect(() => {
    if (metadata.title) {
      setValue("title", metadata.title);
    }
  }, [metadata, setValue]);

  useEffect(() => {
    if (updateBookmarkModal.isOpen && updateBookmarkModal.bookmarkData) {
      setValue("url", updateBookmarkModal.bookmarkData.url);
      setValue("title", updateBookmarkModal.bookmarkData.title);
      setValue(
        "description",
        updateBookmarkModal.bookmarkData.description || ""
      );
    }
  }, [updateBookmarkModal.isOpen, updateBookmarkModal.bookmarkData, setValue]);

  const handleCloseModal = () => {
    updateBookmarkModal.onClose();
    reset();
  };

  async function onSubmit(data) {
    const { bookmarkData } = updateBookmarkModal;
    const formattedUrlForStorage = formatUrlForStorage(data.url);
    const urlChanged = bookmarkData.url !== formattedUrlForStorage;
    const favicon =
      urlChanged && metadata?.icon
        ? metadata.icon
        : (!bookmarkData.favicon || bookmarkData.favicon === defaultFavicon) &&
          metadata?.icon
        ? metadata.icon
        : bookmarkData.favicon;

    const updatedBookmark = {
      title: data.title,
      description: data.description,
      url: formattedUrlForStorage,
      category_id: bookmarkData.category_id,
      favicon,
    };

    const isUnchanged =
      bookmarkData.url === updatedBookmark.url &&
      bookmarkData.title === updatedBookmark.title &&
      bookmarkData.description === updatedBookmark.description;

    if (isUnchanged) {
      handleCloseModal();
      return;
    }

    await updateBookmark({
      bookmarkId: bookmarkData.id,
      updatedBookmark,
    });

    handleCloseModal();
  }

  const bodyContent = !isUpdating ? (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-2 px-5 py-5 overflow-hidden bg-secondaryBg dark:bg-secondaryBgDark rounded-lg border border-gray-300 shadow-sm focus-within:border-rose-50 focus-within:ring-1 focus-within:ring-rose-50">
        <Input
          id="url"
          name="url"
          label="Bookmark URL"
          type="url"
          register={register}
          disabled={isFetching || isUpdating}
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
          disabled={isFetching || isUpdating}
          register={register}
          validationRules={{
            required: "This field is required",
          }}
          errors={errors}
        />

        <TextArea
          {...register("description")}
          className="block w-full rounded-md resize-none text-sm px-3 border-0 py-3 mb-6 text-textPrimary900 placeholder:text-textPrimary400 ring-inset focus:outline-none focus:ring-2 focus:ring-inset focus:ring-lightOutline dark:focus:ring-darkOutline dark:bg-secondaryBgDark dark:text-white sm:leading-6"
          name="description"
          placeholder="Optional bookmark description..."
          defaultValue={""}
          id="description"
          disabled={isFetching || isUpdating}
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
      body={bodyContent}
      disabled={isFetching || isUpdating}
      isOpen={updateBookmarkModal.isOpen}
      onClose={handleCloseModal}
      title="Update bookmark"
    />
  );
});

export default UpdateBookmarkModal;
