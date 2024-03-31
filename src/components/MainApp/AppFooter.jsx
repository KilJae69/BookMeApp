import Brand from "../Brand";
import Heading from "../Heading";

const brands = [
  {label: "ReactJS", src: "brands/react-logo.png", href: "https://react.dev/"},
  {label: "Supabase", src: "brands/supabase-logo.png", href: "https://supabase.com/"},
  {label: "Tailwind UI", src: "brands/tailwind-logo.png", href: "https://tailwindui.com/"},
  {label: "React Query", src: "brands/react-query-logo.png", href: "https://tanstack.com/query/latest/"},
  {label: "Zustand", src: "brands/zustand-logo.png", href: "https://zustand-demo.pmnd.rs/"},
  {label: "React Router", src: "brands/react-router-logo.png", href: "https://reactrouter.com/en/main"},
  {label: "React Hook Form", src: "brands/react-hook-form-logo.png", href: "https://react-hook-form.com/"},
  {label: "React Icons", src: "brands/react-icons-logo.png", href: "https://react-icons.github.io/react-icons/"},
]

function AppFooter() {
  return (
    <footer
      className="bg-white dark:bg-secondaryBgDark"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-10 sm:pt-15 lg:px-8 lg:pt-20">
        <div className="bg-white dark:bg-secondaryBgDark py-8 sm:py-12">
          <div className="mx-auto max-w-7xl px-2 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
              <div className="mx-auto w-full max-w-xl lg:mx-0">
                <Heading
                  level={2}
                  className="text-3xl font-bold tracking-tight text-primary600 dark:text-primaryDark600"
                >
                  We made it possible
                </Heading>
               
                <p className="mt-6 text-lg leading-8 text-textPrimary500 dark:text-textPrimaryDark">
                  My journey to build{" "}
                  <span className="font-semibold">BookMeApp</span> and traverse
                  into web dev world was empowered by these incredible tools and
                  technologies. I extend my gratitude to the developers and
                  communities behind these projects:
                </p>
              </div>
              <div className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
                {brands.map((brand) => (
                  <Brand key={brand.label} {...brand} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 dark:border-white pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-textPrimary500 dark:text-textPrimaryDark">
            &copy; 2024 By Adi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default AppFooter;
