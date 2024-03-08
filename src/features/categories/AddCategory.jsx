import { HiPlus } from "react-icons/hi";
import Button from "../../ui/Button";
import useAddCategoryModalStore from "../../store/useAddCategoryModalStore";



function AddCategory() {
const addCategoryModal = useAddCategoryModalStore();


  return (
    <div>
      <Button
        onClick={(e)=>{
          e.stopPropagation();
          addCategoryModal.onOpen()}}
        variation="primary"
      >
        <div className="flex gap-2">
          <HiPlus className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
          <span>New Category</span>
        </div>
      </Button>
     
    </div>
  );
}

export default AddCategory;
