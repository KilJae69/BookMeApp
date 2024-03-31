import { HiOutlineFolderPlus } from "react-icons/hi2";
import Heading from "./Heading";
import AddCategory from "../features/categories/AddCategory";

function EmptyCollection() {
  return (
    <div className="relative text-center py-20">
      <HiOutlineFolderPlus className="mx-auto w-12 h-12 text-primary600 dark:text-primaryDark600" />
      <Heading
        level={1}
        className="mt-2 text-xl font-semibold text-textPrimary900 dark:text-white"
      >
        No categories in this collection yet
      </Heading>
      <p className="mt-3 text-md text-textPrimary500 ">
        Get started by creating your first category.
      </p>{" "}
      <div className="mt-6">
        <AddCategory />
      </div>
    </div>
  );
}

export default EmptyCollection;
