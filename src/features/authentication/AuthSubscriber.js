import { useEffect } from "react";
import supabase from "../../services/supabase";
import useAuthStore from "../../store/useAuthStore";

export function AuthSubscriber() {
  const { setUser, clearUser, setInitialized } = useAuthStore();

  useEffect(() => {
    // Async function to fetch session and user
    async function checkAuthState() {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session?.user) {
        setUser(session.user);
      } else {
        clearUser();
      }
      setInitialized(true);
    }

    // Call the async function
    checkAuthState();

    // Listen for auth state changes
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (["SIGNED_IN", "TOKEN_REFRESHED", "USER_UPDATED"].includes(event)) {
          session?.user ? setUser(session.user) : clearUser();
        } else if (event === "SIGNED_OUT") {
          clearUser();
        }
       
      }
    );

    // Cleanup on unmount
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [setUser, clearUser, setInitialized]);

  return null;
}
