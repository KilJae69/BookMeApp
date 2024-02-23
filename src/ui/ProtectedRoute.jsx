import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import SpinnerMini from "./Spinner";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  //1. Load the authenticated user
  const { isLoading, isAuthenticated } = useUser();

  //2. If the user is not authenticated, redirect to the /login page
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login");
  }, [isAuthenticated, navigate, isLoading]);

  //3. While loading, show a loading spinner
  if (isLoading)
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <SpinnerMini size="huge" />
      </div>
    );
  //4. If the user is authenticated, render the children
  if (isAuthenticated) {
    return children;
  }
}

export default ProtectedRoute;
