import Button from "../../components/buttons/Button";
import useAddCollectionModalStore from "../../store/useAddCollectionModalStore";
import AddCollectionModal from "./AddCollectionModal";


function AddCollection() {
    const addCollectionModal = useAddCollectionModalStore();
    return (
        <>
      <div className="text-center">
        <Button onClick={addCollectionModal.onOpen} variation="primary">
          Add Collection
        </Button>
      </div>
      <AddCollectionModal />
        </>
    );
}

export default AddCollection
