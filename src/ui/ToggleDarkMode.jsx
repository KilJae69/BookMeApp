import { HiOutlineSun } from "react-icons/hi2";

function ToggleDarkMode() {
    return (
      <button
        type="button"
        className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
      >
        <span className="sr-only">Toggle Dark/Light Mode</span>
        <HiOutlineSun className="h-6 w-6" aria-hidden="true" />
      </button>
    );
}

export default ToggleDarkMode
