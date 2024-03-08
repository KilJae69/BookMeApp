import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { classNames } from "../helpers/classNames";
import {
  HiArrowCircleRight,
  HiDotsHorizontal,
  HiPencil,
  HiTrash,
} from "react-icons/hi";

function EditActionsDropdown({ onDelete, onEdit, categoryTheme = null }) {
  const handleClick = (e) => {
    e.stopPropagation();
  };

  return (
    <Menu as="div" className=" relative inline-block text-left">
      <div>
        <Menu.Button onClick={handleClick} className="px-3 py-3 group">
          <HiDotsHorizontal
            className={`z-100 h-5 w-5 text-gray-700 transition-colors duration-300 ease-in-out ${categoryTheme ? categoryTheme.textLightGroupHover : "group-hover:text-rose-600"}`}
            aria-hidden="true"
          />
          <div className="absolute inset-0 rounded-full scale-0 group-hover:scale-50 transition-transform duration-300 ease-out"></div>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={onEdit}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "group flex px-4 py-2 text-sm w-full"
                  )}
                >
                  <HiPencil
                    className={`mr-3 h-5 w-5 ${categoryTheme?.textLight} ${categoryTheme?.textLightGroupHover}`}
                    aria-hidden="true"
                  />
                  Edit
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "group flex items-center px-4 py-2 text-sm w-full"
                  )}
                >
                  <HiArrowCircleRight
                    className={`mr-3 h-5 w-5 ${categoryTheme?.textLight} ${categoryTheme?.textLightGroupHover}`}
                    aria-hidden="true"
                  />
                  Move
                </button>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={onDelete}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "group w-full flex items-center px-4 py-2 text-sm"
                  )}
                >
                  <HiTrash
                    className={`mr-3 h-5 w-5 ${categoryTheme?.textLight} ${categoryTheme?.textLightGroupHover}`}
                    aria-hidden="true"
                  />
                  Delete
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default EditActionsDropdown;
