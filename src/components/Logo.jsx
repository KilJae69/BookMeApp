import { Link } from "react-router-dom";
import useThemeStore from "../store/useThemeStore";

function Logo() {
  const { theme } = useThemeStore();
  const logoSrc = theme === "light" ? "/default-monochrome.svg" : "/default-monochrome-dark.svg";
  
    return (
      <Link
        to="/"
        className="-m-1.5 p-1.5 inline-block focus:ring focus:outline-none focus:ring-lightOutline dark:focus:ring-darkOutline"
      >
        <span className="sr-only">BookMeApp</span>
        <img className="h-8 w-auto" src={logoSrc} alt="bookMeApp Logo" />
      </Link>
    );
}

export default Logo
