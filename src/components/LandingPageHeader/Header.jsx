import Logo from "../Logo";
import ToggleDarkMode from "../buttons/ToggleDarkMode";
import Button from "../buttons/Button";
import useAuthStore from "../../store/useAuthStore";

function Header() {
  const {user} = useAuthStore();
  const {pathname} = window.location;
 
  return (
    <header className="absolute py-4 px-4 xs:px-8 flex items-center justify-between inset-x-0 top-0 z-50">
      <Logo />
      <div className="flex gap-1 sm:gap-3">
        <ToggleDarkMode />
        {user ? (
          <Button to="/welcome" variation="link">
            Application
          </Button>
        ) : (
          <>
            {pathname !== "/login" && (
              <Button to="/login" variation="link">
                Login
              </Button>
            )}
            {pathname === "/login" && (
              <Button to="/" variation="link">
                Back to Home
              </Button>
            )}
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
