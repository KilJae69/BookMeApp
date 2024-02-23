import Button from "../ui/Button";

import Logo from "./Logo";
import MobileMenuButton from "./MobileMenuButton";
import NavList from "./NavList";



function Navigation({isOpen, setIsOpen}) {
    return (
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Logo />
        </div>
        <div className="flex lg:hidden">
          <MobileMenuButton
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </div>
       <NavList type="desktop"/>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button to="/login" variation="link">Login</Button>
        </div>
      </nav>
    );
}

export default Navigation
