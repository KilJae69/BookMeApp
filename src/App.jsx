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
import SearchResults from "./features/bookmarks/SearchResults";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});


const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: ":collectionId",
        element: <Main />,
      },
      {
        path: ":search",
        element: <SearchResults />,
      },
    ],
  },
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
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthSubscriber />
      <RouterProvider router={router} />
      <Toaster
        toastOptions={{
          success: {
            duration: 4000,
          },
          error: {
            duration: 5000,
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
