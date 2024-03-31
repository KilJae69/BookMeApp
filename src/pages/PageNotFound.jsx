
import BgShapeBottom from "../components/BgShapeBottom";
import BgShapeTop from "../components/BgShapeTop";
import Button from "../components/buttons/Button";
import Heading from "../components/Heading";
import Header from "../components/LandingPageHeader/Header";

function PageNotFound() {
  return (
    <main className="relative grid min-h-screen overflow-hidden  place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <Header />
      <BgShapeTop
        colorFrom="from-[#e11d48] dark:from-[#4f46e5]"
        colorTo="to-[#f97316] dark:to-[#8e43e7]"
      />

      <div className="text-center">
        <p className="text-base font-semibold text-primary600 dark:text-primaryDark600">
          404
        </p>

        <Heading
          level={1}
          className="mt-4 text-3xl sm:text-5xl dark:text-white"
        >
          Page not found
        </Heading>
        <p className="mt-6 text-base leading-7 text-textPrimary700 dark:text-textPrimaryDark">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button to="/" variation="primary">
            Go back home
          </Button>
        </div>
      </div>
      <BgShapeBottom
        colorFrom="from-[#e11d48] dark:from-[#4f46e5]"
        colorTo="to-[#f97316] dark:to-[#8e43e7]"
      />
    </main>
  );
}

export default PageNotFound;
