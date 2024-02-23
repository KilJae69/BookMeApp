import { Dialog } from "@headlessui/react";
import Logo from "./Logo";
import MobileMenuButton from "./MobileMenuButton";
import NavList from "./NavList";
import Button from "../ui/Button";

function MobileMenu({ isOpen, setIsOpen }) {
  return (
    <>
      <Dialog as="div" className="lg:hidden" open={isOpen} onClose={setIsOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Logo />
            <MobileMenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <NavList type="mobile" />
              <div className="py-6">
                <Button variation="link" to="/login">
                  dsgsgsgs
                </Button>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>

     
    </>
  );
}

export default MobileMenu;
