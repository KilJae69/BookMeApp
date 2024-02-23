import Logo from "../components/Logo";
import Heading from "../ui/Heading";
import SocialButton from "../ui/SocialButton";
import LoginForm from "../features/authentication/LoginForm";
import BackgroundShape from "../ui/BackgroundShape";
import { useGithubLogin } from "../features/authentication/useGithubLogin";


function LoginPage() {
  const { loginWithGithub, isLoading: isLoadingGithub } = useGithubLogin();

  
  return (
    <>
      <div className="relative flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <BackgroundShape
          positionX="top-[-50px]"
          positionY="left-[calc(50%-11rem)]"
          gradientFrom="#e11d48"
          gradientTo="#f97316"
          width="w-[50.125rem]"
        />

        <div className="flex flex-col items-center sm:mx-auto sm:w-full sm:max-w-md">
          <Logo />
          <Heading level={2} className="mt-6 text-center text-2xl">
            {" "}
            Sign in to your account
          </Heading>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <LoginForm />

            <div>
              <div className="relative mt-10">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm font-medium leading-6">
                  <span className="bg-white px-6 text-gray-900">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <SocialButton disabled={isLoadingGithub} service="google" />
                <SocialButton disabled={isLoadingGithub} service="github" onClick={loginWithGithub}/>
              </div>
            </div>
          </div>
        </div>
        <BackgroundShape
          positionX="bottom-[10px]"
          positionY="left-[50%]"
          gradientFrom="#e11d48"
          gradientTo="#f97316"
        />
      </div>
    </>
  );
}

export default LoginPage;
