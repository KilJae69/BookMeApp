import { Link } from "react-router-dom";

import Heading from "../components/Heading";
import SignupForm from "../features/authentication/SignupForm";
import SocialLogin from "../features/authentication/SocialLogin";
import Header from "../components/LandingPageHeader/Header";
import BgShapeBottom from "../components/BgShapeBottom";
import BgShapeTop from "../components/BgShapeTop";


function RegisterPage() {
  return (
    
      <div className="h-screen overflow-hidden relative flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <BgShapeTop
          colorFrom="from-[#e11d48] dark:from-[#4f46e5]"
          colorTo="to-[#f97316] dark:to-[#8e43e7]"
        />
        <Header />
        <div className="flex flex-col items-center sm:mx-auto sm:w-full sm:max-w-md">
          <Heading
            level={2}
            className="mt-6 text-center text-2xl dark:text-white"
          >
            {" "}
            Create an account
          </Heading>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-secondaryBg dark:bg-secondaryBgDark px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <SignupForm />
            <div className="text-center mt-2">
              <Link to="/login" className="text-indigo-600 hover:underline ">
                Already have an account?
              </Link>
            </div>
            <div>
              <div className="relative mt-10">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm font-medium leading-6">
                  <span className="bg-secondaryBg dark:bg-secondaryBgDark px-6 text-textPrimary900 dark:text-textPrimaryDark">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <SocialLogin />
              </div>
            </div>
          </div>
        </div>
        <BgShapeBottom
          colorFrom="from-[#e11d48] dark:from-[#4f46e5]"
          colorTo="to-[#f97316] dark:to-[#8e43e7]"
        />
      </div>
    
  );
}

export default RegisterPage;
