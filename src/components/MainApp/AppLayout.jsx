import { useState } from "react";

import Logo from "../Logo";
import MobileAppNav from "./MobileAppNav";
import AppHeader from "./AppHeader";
import AppNavList from "./AppNavList";

import { useCollections } from "../../features/collections/useCollections";
import useAuthStore from "../../store/useAuthStore";
import Spinner from "../Spinner";
import AddCollectionModal from "../../features/collections/AddCollectionModal";
import DeleteCollectionModal from "../../features/collections/DeleteCollectionModal";
import UpdateCollectionModal from "../../features/collections/UpdateCollectionModal";
import AppFooter from "./AppFooter";

export default function AppLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { user } = useAuthStore();
  const userId = user?.id;
  const { collections, isLoading } = useCollections(userId);

  return (
    <>
      {/* Mobile sidebar */}
      <MobileAppNav isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-secondaryBg dark:bg-secondaryBgDark px-6 pb-4">
          <div className="flex h-16 shrink-0 items-center">
            <Logo />
          </div>
          <AppNavList />
        </div>
      </div>

      <div className="lg:pl-72">
        <AppHeader setIsOpen={setSidebarOpen} />

        <main className="relative min-h-screen bg-bgPrimary50 dark:bg-bgDarkPrimary">
          {isLoading && (
            <div className="fixed inset-0 flex items-center justify-center">
              <Spinner size="large" />
            </div>
          )}

          {collections && children}

          <AddCollectionModal />
          <DeleteCollectionModal />
          <UpdateCollectionModal />
        </main>
       <AppFooter />
      </div>
    </>
  );
}
