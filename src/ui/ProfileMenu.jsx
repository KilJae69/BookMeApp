import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { HiChevronDown } from "react-icons/hi2";
import { useUser } from "../features/authentication/useUser";
import { useLogout } from "../features/authentication/useLogout";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function ProfileMenu() {
  const {user} = useUser()
  
  const {logout,isLoading}= useLogout()
 
    return (
      <Menu as="div" className="relative">
        <Menu.Button className="-m-1.5 flex items-center p-1.5">
          <span className="sr-only">Open user menu</span>
          <img
            className="h-8 w-8 rounded-full bg-gray-50"
            src="/default-user.jpg"
            alt="default user profile picture"
          />
          <span className="hidden lg:flex lg:items-center">
            <span
              className="ml-4 text-sm font-semibold leading-6 text-gray-900"
              aria-hidden="true"
            >
              {user.user_metadata.username}
            </span>
            <HiChevronDown
              className="ml-2 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
              <Menu.Item >
                {({ active }) => (
                  <a
                    className={classNames(
                      active ? "bg-gray-50" : "",
                      "block px-3 py-1 text-sm leading-6 text-gray-900"
                    )}
                  >
                    Your profile
                  </a>
                )}
              </Menu.Item>
              <Menu.Item >
                {({ active }) => (
                  <button disabled={isLoading} onClick={logout}
                    className={classNames(
                      active ? "bg-gray-50" : "",
                      "block px-3 py-1 text-sm leading-6 text-gray-900"
                    )}
                  >
                    Sign out
                  </button>
                )}
              </Menu.Item>
         
          </Menu.Items>
        </Transition>
      </Menu>
    );
}

export default ProfileMenu
