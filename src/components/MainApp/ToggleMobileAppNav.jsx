import { HiBars3 } from "react-icons/hi2";
import { useSidebarStore } from "../../store/useSidebarStore";

function ToggleMobileAppNav() {
  const { openSidebar } = useSidebarStore();
  return (
    <button
      type="button"
      className="-m-2.5 p-2.5 text-textPrimary700 hover:text-textPrimary900 dark:text-textPrimaryDark dark:hover:text-white lg:hidden focus:ring focus:outline-none focus:ring-lightOutline dark:focus:ring-darkOutline"
      onClick={openSidebar}
    >
      <span className="sr-only">Open sidebar</span>
      <HiBars3 className="h-6 w-6" aria-hidden="true" />
    </button>
  );
}

export default ToggleMobileAppNav;
