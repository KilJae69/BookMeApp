import { GiBookmark } from "react-icons/gi";
import Modal from "../../components/Modals/Modal";

import Form from "../../ui/Form";
import Input from "../../components/inputs/Input";
import TextArea from "../../ui/TextArea";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import useAddBookmarkModalStore from "../../store/useAddBookmarkModalStore";
import useFetchMetadata from "../../hooks/useFetchMetadata";
import { useCreateBookmark } from "./useCreateBookmark";
import Spinner from "../../ui/Spinner";
import { formatInputForFetch as formatUrlForStorage } from "../../helpers/formatInputForFetch";

function AddBookmarkModal() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
    watch,
  } = useForm();
  const addBookmarkModal = useAddBookmarkModalStore();
  const { metadata, isFetching, fetchMetadata,setMetadata } = useFetchMetadata();
  const { createBookmark, isCreating } = useCreateBookmark(handleClose);

  const defaultFavicon = "/favicon-standard.png";
  const url = watch("url");

  const handleUrlBlur = () => {
    if (!url) return;
    fetchMetadata(url);
  };

  function handleClose(){
    
    reset();
    addBookmarkModal.onClose(()=>setMetadata({})); 
  }


  useEffect(() => {
    if (metadata.title) {
      setValue("title", metadata.title);
   console.log("Effect",metadata.title)
    }
  }, [metadata, setValue, url]);

  function onSubmit(formData) {
   
    const formattedUrlforStorage = formatUrlForStorage(formData.url);
    const newBookmark = {
      ...formData,
      url: formattedUrlforStorage,
      favicon: metadata?.icon || defaultFavicon,
      category_id: addBookmarkModal.categoryId,
    };
    createBookmark({ newBookmark });
    
  }

  const bodyContent = !isCreating ? (
    <Form>
      <div className="px-5 py-5 overflow-hidden bg-white rounded-lg border border-gray-300 shadow-sm focus-within:border-rose-50 focus-within:ring-1 focus-within:ring-rose-50">
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
          className="block w-full rounded-md resize-none px-3 border-0 py-3 mb-6 text-gray-900 placeholder:text-gray-400 ring-inset focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-200 sm:text-sm sm:leading-6"
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
      icon={<GiBookmark className="text-rose-600" size={24} />}
      disabled={isFetching || isCreating}
      body={bodyContent}
      isOpen={addBookmarkModal.isOpen}
      onClose={handleClose}
      title="Create a new bookmark"
    />
  );
}

export default AddBookmarkModal;
