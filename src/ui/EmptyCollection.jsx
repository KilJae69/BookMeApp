import { HiOutlineFolderPlus } from "react-icons/hi2";
import Heading from "./Heading";
import AddCategory from "../features/categories/AddCategory";

function EmptyCollection() {
  return (
    <div className="relative text-center py-20">
      <HiOutlineFolderPlus className="mx-auto w-12 h-12 stroke-rose-600" />
      <Heading level={3} className="mt-2 text-md font-semibold text-gray-900">
        No categories in this collection yet
      </Heading>
      <p className="mt-3 text-sm text-gray-500">
        Get started by creating your first category.
      </p>{" "}
      <div className="mt-6">
        <AddCategory />
      </div>
    </div>
  );
}

export default EmptyCollection;
