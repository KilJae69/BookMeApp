import BgShapeBottom from "../components/BgShapeBottom";
import BgShapeTop from "../components/BgShapeTop";
import Heading from "../components/Heading";
import Header from "../components/LandingPageHeader/Header";

import Button from "../components/buttons/Button";

function LandingPage() {
  return (
    <div className="relative overflow-hidden bg-bgPrimary50 dark:bg-bgDarkPrimary h-full min-h-screen">
      <Header />

      <div className="relative isolate px-6 pt-14 lg:px-8 ">
        <BgShapeTop
          colorFrom="from-[#e11d48] dark:from-[#4f46e5]"
          colorTo="to-[#f97316] dark:to-[#8e43e7]"
        />
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-53">
          <div className="text-center">
            <Heading
              level={1}
              className="text-3xl font-bold tracking-tight text-textPrimary900 dark:text-white sm:text-6xl"
            >
              Simple bookmark app to streamline your learning process
            </Heading>

            <div className="relative">
              <p className="mt-6 text-lg leading-8 text-textPrimary700 dark:text-textPrimaryDark">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
            </div>

            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button variation="primary" to="/register">
                Register
              </Button>
            </div>
          </div>
        </div>
        <BgShapeBottom
          colorFrom="from-[#e11d48] dark:from-[#4f46e5]"
          colorTo="to-[#f97316] dark:to-[#8e43e7]"
        />
      </div>
    </div>
  );
}

export default LandingPage;
