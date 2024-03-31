import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { HiXMark } from "react-icons/hi2";
import Logo from "../Logo";
import AppNavList from "./AppNavList";
import { useSidebarStore } from "../../store/useSidebarStore";

function MobileAppNav() {
  const { isSidebarOpen, closeSidebar } = useSidebarStore();
  return (
    <Transition.Root show={isSidebarOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-40 lg:hidden"
        onClose={closeSidebar}
      >
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-overlayBg" />
        </Transition.Child>

        <div className="fixed inset-0 flex">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel className="relative mr-16 flex w-full max-w-[85%] xs:max-w-xs flex-1">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                  <button
                    type="button"
                    className="-m-2.5 p-2.5 focus:ring focus:outline-none focus:ring-lightOutline dark:focus:ring-darkOutline"
                    onClick={closeSidebar}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <HiXMark
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </Transition.Child>
              {/* Sidebar component, swap this element with another sidebar if you like */}
              <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-secondaryBg dark:bg-secondaryBgDark px-6 pb-4">
                <div className="flex h-16 shrink-0 items-center">
                  <Logo />
                </div>
                <AppNavList />
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default MobileAppNav;
