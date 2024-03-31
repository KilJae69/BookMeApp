import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { HiXMark } from "react-icons/hi2";

export default function Modal({
  isOpen,
  onSubmit,
  onClose,
  title,
  icon,
  body,
  disabled,
}) {
  const [showModal, setShowModal] = useState(isOpen);
  const cancelRef = useRef();

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleSubmit = useCallback(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <Transition.Root show={showModal} as={Fragment}>
      <Dialog
        as="div"
        initialFocus={cancelRef}
        className="relative z-50"
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-overlayBg bg-opacity-50 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-300"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="left-0 lg:left-[9%] relative transform  rounded-lg bg-secondaryBg dark:bg-secondaryBgDark px-4 pb-8 pt-5 text-left shadow-xl w-full transition-all sm:my-8 sm:max-w-lg sm:p-6">
                <div className="absolute top-0 right-0 pt-4 pr-4">
                  <button
                    ref={cancelRef}
                    type="button"
                    className="rounded-md text-textPrimary400 hover:text-textPrimary500 focus:outline-none focus:ring-2 focus:ring-lightOutline dark:focus:ring-darkOutline"
                    onClick={onClose}
                  >
                    <span className="sr-only">Close</span>
                    <HiXMark className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className=" sm:flex">
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 dark:bg-indigo-100 sm:mx-0 sm:h-10 sm:w-10">
                    {icon}
                  </div>
                  <div className="mt-3 w-full text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <Dialog.Title
                      as="h3"
                      className="text-xl sm:mb-5 font-semibold leading-6 text-textPrimary900 dark:text-white"
                    >
                      {title}
                    </Dialog.Title>
                    <div className="mt-6 sm:mt-2 w-full min-h-[100px]">{body}</div>
                  </div>
                </div>
                <div className="mt-3 sm:flex sm:flex-row-reverse">
                  <button
                    disabled={disabled}
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-primary600 dark:bg-primaryDark600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary500 dark:hover:bg-primaryDark500 sm:ml-3 sm:w-auto disabled:cursor-not-allowed disabled:bg-red-200 dark:disabled:bg-indigo-200 disabled:text-grey-400  disabled:hover:bg-red-200  disabled:ring-red-200 dark:disabled:ring-indigo-200 disabled:ring-inset disabled:ring-1"
                    onClick={handleSubmit}
                  >
                    Confirm
                  </button>
                  <button
                    disabled={disabled}
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-secondaryBg dark:bg-secondaryBgDark px-3 py-2 text-sm font-semibold text-textPrimary900 dark:text-textPrimaryDark dark:hover:text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-bgPrimary50 dark:hover:bg-bgDarkPrimary  sm:mt-0 sm:w-auto disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-textPrimary400 disabled:hover:bg-gray-200 disabled:ring-gray-200 disabled:ring-inset disabled:ring-1"
                    onClick={onClose}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
