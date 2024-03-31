import { HiOutlineLogout } from "react-icons/hi";
import IconButton from "../../components/buttons/IconButton";
import { useLogout } from "./useLogout";
import Spinner from "../../components/Spinner";

function Logout() {
  const { logout, isLoading } = useLogout();
  return (
    <IconButton
      disabled={isLoading}
      onClick={logout}
      Icon={!isLoading ? HiOutlineLogout : Spinner}
      className="text-primary500 dark:text-primaryDark500 hover:text-primary600 dark:hover:text-primaryDark600 transition-colors duration-200 ease-in-out"
    />
  );
}

export default Logout;
