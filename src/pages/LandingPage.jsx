import Header from "../components/Header";
import BackgroundShape from "../ui/BackgroundShape";
import Button from "../ui/Button";

function LandingPage() {
  return (
    <div className="relative bg-white-200 h-screen">
      <Header />
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#e11d48] to-[#f97316] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="isolate px-6 pt-14 lg:px-8 ">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-53">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Simple bookmark app to streamline your learning process
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button variation="primary" to="/register">
                Register
              </Button>
            </div>
          </div>
        </div>

        <BackgroundShape
          positionX="top-[calc(70%-15rem)] xl:top-[calc(80%-20rem)] 2xl:top-[calc(80%-28rem)]"
          positionY="left-[calc(100%-11rem)]"
          gradientFrom="#e11d48"
          gradientTo="#f97316"
          width="w-50"
        />
      </div>
    </div>
  );
}

export default LandingPage;
