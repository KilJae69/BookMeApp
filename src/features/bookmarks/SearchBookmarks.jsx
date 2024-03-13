import { HiMagnifyingGlass } from "react-icons/hi2";
import Input from "../../components/inputs/Input";
import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import useDebounce from "../../hooks/useDebounce";
import { useSearchBookmarks } from "./useSearchBookmarks";

function SearchBookmarks() {
  const { register,watch} = useForm();
  const searchRegister = register("search");
  const searchTerm = watch("search");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
    useSearchBookmarks(debouncedSearchTerm);

   
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      variation="search"
    >
      <HiMagnifyingGlass
        className="pointer-events-none h-7 w-7 text-gray-400"
        aria-hidden="true"
      />
      <span className="sr-only">Search</span>
      <Input
        id="search"
        name="search"
        label="Search bookmarks..."
        disabled={false}
        variation="search"
        type="search"
        register={() => searchRegister}
      />

    </Form>
  );
}

export default SearchBookmarks;
