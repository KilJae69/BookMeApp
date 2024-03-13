import { HiBars3 } from "react-icons/hi2";

function ToggleMobileAppNav({setIsOpen}) {
    return (
      <button
        type="button"
        className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
        onClick={() => setIsOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <HiBars3 className="h-6 w-6" aria-hidden="true" />
      </button>
    );
}

export default ToggleMobileAppNav
