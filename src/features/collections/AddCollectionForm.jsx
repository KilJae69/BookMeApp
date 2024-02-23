import { useEffect, useRef, useState } from "react";
import { useCreateCollection } from "./useCreateCollection";
import { useUser } from "../authentication/useUser";
import Spinner from "../../ui/Spinner";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useOutsideClick } from "../../hooks/useOutsideClick";

function AddCollectionForm({ onCancelAdding }) {
  const [name, setName] = useState("");
  const inputRef = useRef(null);
  const formRef = useRef(null);
  const { createCollection, isLoading } = useCreateCollection();
  const { user } = useUser();
  const userId = user?.id;

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name) return; 
 
    createCollection({
      newCollection: { collection_name: name, user_id: userId },
    });
    setName(""); 
    onCancelAdding();
  };
  useOutsideClick(formRef, onCancelAdding);

  if (isLoading) return <Spinner />;

  return (
    <div ref={formRef}>
      <Form onSubmit={handleSubmit}>
        <FormRow label="Add collection" labelVariation="hidden">
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            placeholder="Name your collection..."
            id="name"
            ref={inputRef}
            variation="app"
          />
        </FormRow>
        <FormRow>
          <div className="flex gap-2">
            <button
              type="submit"
              className="mt-4 rounded-md bg-rose-600 px-4 py-2 text-sm font-semibold text-white hover:bg-rose-500"
            >
              Add Collection
            </button>
            <button
              onClick={onCancelAdding}
              type="button"
              className="mt-4 rounded-md px-4 py-2 text-sm font-semibold hover:bg-rose-500"
            >
              Cancel
            </button>
          </div>
        </FormRow>
      </Form>
    </div>
  );
}

export default AddCollectionForm;
