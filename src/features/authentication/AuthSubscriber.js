import { useEffect } from "react";
import supabase from "../../services/supabase";
import useAuthStore from "../../store/useAuthStore";

export function AuthSubscriber() {
  const { setUser, clearUser, setInitialized } = useAuthStore();

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
     

        switch (event) {
          case "SIGNED_IN":
          case "INITIAL_SESSION":
            if (session?.user) {
              setUser(session.user);
            }
            break;
          case "SIGNED_OUT":
          case "TOKEN_REFRESHED":
          case "USER_UPDATED":
            clearUser();
            break;
          default:
            console.log("Unhandled auth event:", event);
        }

        // Mark as initialized after handling the initial session
        setInitialized();
      }
    );

    // Cleanup on unmount
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [setUser, clearUser, setInitialized]);

  // This component doesn't render anything; it just sets up the listener
  return null;
}

