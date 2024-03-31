import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";
import IconButton from "./IconButton";
import useThemeStore from "../../store/useThemeStore";

function ToggleDarkMode() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <IconButton
      onClick={toggleTheme}
      className="text-primary500 dark:text-primaryDark500 hover:text-primary600 dark:hover:text-primaryDark600 transition-colors duration-200 ease-in-out"
      Icon={theme === "light" ? HiOutlineMoon : HiOutlineSun}
    />
  );
}

export default ToggleDarkMode;
