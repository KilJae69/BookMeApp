import { useState } from "react";

import Logo from "../Logo";
import MobileAppNav from "./MobileAppNav";
import AppHeader from "./AppHeader";
import AppNavList from "./AppNavList";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Mobile sidebar */}
      <MobileAppNav isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
          <div className="flex h-16 shrink-0 items-center">
            <Logo />
          </div>
          <AppNavList />
        </div>
      </div>

      <div className="lg:pl-72">
        <AppHeader setIsOpen={setSidebarOpen} />

        <main className="py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
}
