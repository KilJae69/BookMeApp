import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import PageNotFound from "./pages/PageNotFound";
import RegisterPage from "./pages/RegisterPage";
import AppLayout from "./ui/AppLayout";
import ProtectedRoute from "./ui/ProtectedRoute";

import Main from "./pages/Main";

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
