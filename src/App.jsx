import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import PageNotFound from "./pages/PageNotFound";
import RegisterPage from "./pages/RegisterPage";
import AppLayout from "./components/MainApp/AppLayout";
import ProtectedRoute from "./components/MainApp/ProtectedRoute";

import Main from "./pages/Main";
import { AuthSubscriber } from "./features/authentication/AuthSubscriber";
import Account from "./pages/Account";
import Welcome from "./pages/Welcome";
import { useEffect } from "react";
import useThemeStore from "./store/useThemeStore";
import FavouritesPage from "./pages/FavouritesPage";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <PageNotFound />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/:collectionId",
    element: (
      <ProtectedRoute>
        <AppLayout>
          <Main />
        </AppLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/profile",
    element: (
      <ProtectedRoute>
        <AppLayout>
          <Account />
        </AppLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/welcome",
    element: (
      <ProtectedRoute>
        <AppLayout>
          <Welcome />
        </AppLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/favourites",
    element: (
      <ProtectedRoute>
        <AppLayout>
          <FavouritesPage />
        </AppLayout>
      </ProtectedRoute>
    ),
  },
]);

function App() {
  const { theme } = useThemeStore();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  
  return (
      <QueryClientProvider client={queryClient}>
        <AuthSubscriber />
   
          <RouterProvider router={router} />

        <Toaster
          toastOptions={{
            success: {
              duration: 2000,
            },
            error: {
              duration: 3000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "400px",
              padding: "16px 24px",
              backgroundColor: "#7c7c7c",
              color: "#fff",
            },
          }}
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
        />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
  
  );
}

export default App;
