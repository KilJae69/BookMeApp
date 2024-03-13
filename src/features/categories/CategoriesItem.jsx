import { Disclosure } from "@headlessui/react";
import { applyCategoryTheme } from "../../helpers/applyCategoryTheme";

import useDeleteCategoryModal from "../../store/useDeleteCategoryModalStore";
import EditActionsDropdown from "../../ui/EditActionsDropdown";
import { HiChevronRight } from "react-icons/hi";

import useUpdateCategoryModalStore from "../../store/useUpdateCategoryModalStore";
import BookmarksList from "../bookmarks/BookmarksList";

function CategoriesItem({ category }) {
  const { id: categoryId, category_name: name, color } = category;
  const theme = applyCategoryTheme(color);
  const updateCategoryModal = useUpdateCategoryModalStore();
  const deleteCategoryModal = useDeleteCategoryModal();

  const handleEdit = () => {
    updateCategoryModal.onOpen(category);
  };

  const handleDelete = () => deleteCategoryModal.onOpen(categoryId);

  return (
    <Disclosure
      as="div"
      className="w-full col-span-1 flex flex-col rounded-md shadow-md transition-transform duration-300 cursor-pointer"
    >
      {({ open }) => (
        <>
          <div className={` flex items-center justify-between rounded-md`}>
            <Disclosure.Button className="group flex flex-1 truncate p-2 text-sm">
              <div
                className={`flex w-14 rounded-md transition flex-shrink-0 items-center justify-between text-sm font-medium text-white `}
              >
                <HiChevronRight
                  className={`${
                    open ? "transform rotate-90" : ""
                  } w-8 h-8 group-hover:scale-125 transition-transform duration-300 ${
                    theme?.textLight
                  } ${theme?.textLightGroupHover}`}
                />
              </div>
              <div className="flex flex-grow  truncate items-start flex-col">
                <span className=" max-w-[100%] truncate font-medium text-gray-900">
                  {name}
                </span>
                {/* <p className="truncate text-gray-500">
                  {bookmarks.length}{" "}
                  {bookmarks.length === 1 ? "Bookmark" : "Bookmarks"}
                </p> */}
              </div>
            </Disclosure.Button>
            <EditActionsDropdown
              categoryTheme={theme}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          </div>
          <Disclosure.Panel
            as="div"
            className="px-4 pt-4 pb-2 text-sm text-gray-500"
          >
            <BookmarksList categoryColor={color} categoryId={categoryId} />
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default CategoriesItem;
