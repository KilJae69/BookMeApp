
import Button from "../../components/buttons/Button";
import useAddCategoryModalStore from "../../store/useAddCategoryModalStore";
import { HiFolderPlus } from "react-icons/hi2";


function AddCategory({compact}) {
const addCategoryModal = useAddCategoryModalStore();

const handleClick = (e) => {
  e.stopPropagation();
  addCategoryModal.onOpen();
}

const compactStyle = compact ? "":""

  return (
    <>
      <div>
        <Button onClick={handleClick} className={compactStyle} variation="add">
          <div className="flex items-center gap-2 justify-center">
            <HiFolderPlus
              className="-ml-0.5 h-7 w-7 sm:h-5 sm:w-5"
              aria-hidden="true"
            />
            {!compact && <span className="">New Category</span>}
            {compact && <span className="hidden sm:block">New Category</span>}
          </div>
        </Button>
      </div>
    </>
  );
}

export default AddCategory;
