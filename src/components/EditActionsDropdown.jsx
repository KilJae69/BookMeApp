import { Menu, Transition } from "@headlessui/react";
import { Fragment, memo } from "react";
import { classNames } from "../helpers/classNames";
import { HiDotsHorizontal, HiPencil, HiTrash } from "react-icons/hi";
import { useCollections } from "../features/collections/useCollections";
import useAuthStore from "../store/useAuthStore";

const EditActionsDropdown = memo(function EditActionsDropdown({
  onDelete,
  onEdit,
  categoryTheme = null,
  isDeleteAlwaysVisible = false,
}) {
  const { user } = useAuthStore();
  const { collections } = useCollections(user?.id);
  const shouldRenderDelete = isDeleteAlwaysVisible || (collections &&collections.length > 1);
  const handleClick = (e) => {
    e.stopPropagation();
  };

  return (
    <Menu as="div" className=" relative inline-block text-left">
      <div>
        <Menu.Button
          onClick={handleClick}
          className="px-3 py-3 group focus:outline-none focus:border focus:rounded-full focus:border-lightOutline dark:focus:border-darkOutline"
        >
          <HiDotsHorizontal
            className={`z-100 h-5 w-5 text-textPrimary700 dark:text-textPrimaryDark transition-colors duration-300 ease-in-out ${
              categoryTheme
                ? categoryTheme.textLightGroupHover
                : "group-hover:text-primary600 dark:group-hover:text-primaryDark600"
            }`}
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
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-secondaryBg dark:bg-secondaryBgDark dark:border shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={onEdit}
                  className={classNames(
                    active
                      ? "bg-bgPrimary50 dark:bg-bgDarkPrimary text-textPrimary900 dark:text-textPrimaryDark"
                      : "text-textPrimary900 dark:text-textPrimaryDark",
                    "group flex px-4 py-2 text-sm w-full"
                  )}
                >
                  <HiPencil
                    className={`mr-3 h-5 w-5
                    ${
                      categoryTheme
                        ? categoryTheme.textLightGroupHover
                        : "group-hover:text-primary600 dark:group-hover:text-primaryDark600"
                    }
                    ${
                      categoryTheme
                        ? categoryTheme.textLight
                        : "text-primary500 dark:text-primaryDark500"
                    }`}
                    aria-hidden="true"
                  />
                  Edit
                </button>
              )}
            </Menu.Item>
          </div>
          {shouldRenderDelete && (
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={onDelete}
                    className={classNames(
                      active
                        ? "bg-bgPrimary50 dark:bg-bgDarkPrimary text-textPrimary900 dark:text-textPrimaryDark"
                        : "text-textPrimary900 dark:text-textPrimaryDark",
                      "group w-full flex items-center px-4 py-2 text-sm"
                    )}
                  >
                    <HiTrash
                      className={`mr-3 h-5 w-5
                    ${
                      categoryTheme
                        ? categoryTheme.textLightGroupHover
                        : "group-hover:text-primary600 dark:group-hover:text-primaryDark600"
                    }
                    ${
                      categoryTheme
                        ? categoryTheme.textLight
                        : "text-primary500 dark:text-primaryDark500"
                    }`}
                      aria-hidden="true"
                    />
                    Delete
                  </button>
                )}
              </Menu.Item>
            </div>
          )}
        </Menu.Items>
      </Transition>
    </Menu>
  );
});

export default EditActionsDropdown;
