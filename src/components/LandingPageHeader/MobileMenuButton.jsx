import { HiXMark, HiBars3 } from "react-icons/hi2";

function MobileMenuButton({ isOpen, setIsOpen}) {
    return (
      <button
        type="button"
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="sr-only">
          {isOpen ? "Close main menu" : "Open main menu"}
        </span>
        {isOpen ? (
          <HiXMark className="h-6 w-6" aria-hidden="true" />
        ) : (
          <HiBars3 className="h-6 w-6" aria-hidden="true" />
        )}
      </button>
    );
}

export default MobileMenuButton
