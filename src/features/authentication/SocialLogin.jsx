import SocialButton from "../../components/buttons/SocialButton";
import { useGithubLogin } from "./useGithubLogin";
import { useGoogleLogin } from "./useGoogleLogin";

function SocialLogin() {
    
  const { loginWithGithub, isLoading: isLoadingGithub } = useGithubLogin();
  const { loginWithGoogle, isLoading: isLoadingGoogle } = useGoogleLogin();

  const handleGithubLogin = (e) => {
    e.preventDefault();
    loginWithGithub();
  };
  const handleGoogleLogin = (e) => {
    e.preventDefault();
    loginWithGoogle();
  };
    return (
      <>
        <SocialButton
          disabled={isLoadingGithub || isLoadingGoogle}
          service="google"
          onClick={handleGoogleLogin}
        />
        <SocialButton
          disabled={isLoadingGithub || isLoadingGoogle}
          service="github"
          onClick={handleGithubLogin}
        />
      </>
    );
}

export default SocialLogin
