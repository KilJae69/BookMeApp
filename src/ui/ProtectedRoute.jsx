import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useAuthStore from "../store/useAuthStore";
import Spinner from "./Spinner";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { user, isInitialized } = useAuthStore();



  //2. If the user is not authenticated, redirect to the /login page
  useEffect(() => {
    if (isInitialized && !user) navigate("/login");
  }, [user, navigate,isInitialized]);

  //3. While loading, show a loading spinner
if (!isInitialized) return (
  <div className="fixed inset-0 flex items-center justify-center">
    <Spinner size="huge" />
  </div>
);
  //4. If the user is authenticated, render the children

    return children;
  }


export default ProtectedRoute;
