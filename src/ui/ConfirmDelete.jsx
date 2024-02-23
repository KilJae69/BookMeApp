import { Dialog } from "@headlessui/react";
import { HiExclamationTriangle } from "react-icons/hi2";
import Button from "./Button";

function ConfirmDelete({ onDelete, onCancel, name, toDelete }) {
  return (
    <>
      <div className="sm:flex sm:items-start p-5 xl:p-10">
        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
          <HiExclamationTriangle
            className="h-8 w-8 text-red-600"
            aria-hidden="true"
          />
        </div>
        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
          <Dialog.Title
            as="h3"
            className="text-base font-semibold leading-6 text-gray-900"
          >
            Delete {toDelete}:{" "}
            <span className="text-rose-600 text-xl ml-2">{name}</span>
          </Dialog.Title>
          <div className="mt-2">
            <p className="text-sm text-gray-500">
              {`Are you sure you want to delete this ${toDelete.toLowerCase()}? All of your
              ${
                toDelete === "Collection"
                  ? `categories and bookmarks`
                  : "bookmarks"
              } within this ${toDelete.toLowerCase()} will be
              permanently removed from our servers forever. This action cannot
              be undone.`}
            </p>
          </div>
        </div>
      </div>
      <div className="p-5 mt-5 gap-4 sm:mt-4 flex justify-around">
        <Button onClick={onDelete} variation="form">
          Delete
        </Button>
        <Button onClick={onCancel} variation="cancel">
          Cancel
        </Button>
      </div>
    </>
  );
}

export default ConfirmDelete;
