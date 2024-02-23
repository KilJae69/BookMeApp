import BackgroundShape from "../ui/BackgroundShape";
import Button from "../ui/Button";
import Heading from "../ui/Heading";

function PageNotFound() {
  return (
    <main className="relative grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <BackgroundShape
        positionX="top-[-50px]"
        positionY="left-[calc(50%-11rem)]"
        gradientFrom="#e11d48"
        gradientTo="#f97316"
        width="w-[50.125rem]"
      />
      <div className="text-center">
        <p className="text-base font-semibold text-rose-600">404</p>

        <Heading level={1} className="mt-4 text-3xl sm:text-5xl">
          Page not found
        </Heading>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button to="/" variation="primary">
            Go back home
          </Button>
        </div>
      </div>
      <BackgroundShape
        positionX="bottom-[10px]"
        positionY="left-[50%]"
        gradientFrom="#e11d48"
        gradientTo="#f97316"
        width="w-[50rem]"
      />
    </main>
  );
}

export default PageNotFound;
