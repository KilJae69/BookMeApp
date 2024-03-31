import { HiOutlineUser } from "react-icons/hi";
import IconButton from "../buttons/IconButton";
import ToggleDarkMode from "../buttons/ToggleDarkMode";
import Logout from "../../features/authentication/Logout";

function ProfileMenu() {
  return (
    <ul className="flex gap-1">
      <li>
        <ToggleDarkMode />
      </li>
      <li>
        <IconButton
          className="text-primary500 dark:text-primaryDark500 hover:text-primary600 dark:hover:text-primaryDark600 transition-colors duration-200 ease-in-out"
          to="/profile"
          Icon={HiOutlineUser}
        />
      </li>
      <li>
        <Logout />
      </li>
    </ul>
  );
}

export default ProfileMenu;
