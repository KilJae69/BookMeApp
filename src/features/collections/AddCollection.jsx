import Button from "../../components/buttons/Button";
import useAddCollectionModalStore from "../../store/useAddCollectionModalStore";

function AddCollection() {
    const addCollectionModal = useAddCollectionModalStore();

    const handleClick = () =>{ 
      addCollectionModal.onOpen();
    }

    return (
      <>
        <div className="">
          <Button onClick={handleClick} className="w-full" variation="primary">
            Add New Collection
          </Button>
        </div>
        
      </>
    );
}

export default AddCollection
