import { HiMagnifyingGlass } from "react-icons/hi2";
import Input from "../../components/inputs/Input";
import { useForm } from "react-hook-form";
import Form from "../../components/Form";
import useDebounce from "../../hooks/useDebounce";
import { useSearchBookmarks } from "./useSearchBookmarks";
import useSearchStore from "../../store/useSearchStore";
import { useEffect } from "react";

function SearchBookmarks() {
  const { register, watch, setValue } = useForm();
  const searchRegister = register("search");

  const debouncedSearchTerm = useDebounce(watch("search"), 500);
  const setSearchTerm = useSearchStore((state) => state.setSearchTerm);
  const { searchTerm } = useSearchStore();

  useEffect(() => {
    setSearchTerm(debouncedSearchTerm);
  }, [debouncedSearchTerm, setSearchTerm]);

  useEffect(() => {
    setValue("search", searchTerm);
  }, [searchTerm, setValue]);

  useSearchBookmarks();

  const searchInputLabel = (
    <span className="flex gap-3">
      <HiMagnifyingGlass
        className="pointer-events-none hidden sm:block h-5 w-5 text-textPrimary400"
        aria-hidden="true"
      />
      Search bookmarks...
    </span>
  );

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      variation="search"
    >
      <span className="sr-only">Search</span>
      <Input
        id="search"
        name="search"
        label={searchInputLabel}
        disabled={false}
        variation="search"
        type="search"
        register={() => searchRegister}
      />
    </Form>
  );
}

export default SearchBookmarks;
