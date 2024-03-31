import { useState } from "react";
import useThemeStore from "../../store/useThemeStore";
import Heading from "../../components/Heading";
import { HiOutlineStar } from "react-icons/hi2";

function EmptyFavourites() {
     const [imageLoaded, setImageLoaded] = useState(false);
     const { theme } = useThemeStore();
     const imgSrc =
       theme === "light" ? "/no-favs.gif" : "/no-favs-dark.gif";
    return (
      <>
        <div className="flex flex-col items-center justify-center">
          <div
            className={`w-72 h-72 transition-opacity duration-1000 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={imgSrc}
              alt="Error kitten image"
              onLoad={() => setImageLoaded(true)}
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
            <Heading
              level={2}
              className="text-center text-lg text-primary500 dark:text-white md:text-2xl"
            >
              You don&apos;t have any favourite bookmarks yet.
            </Heading>
            <div className="text-center">
              <span className="text-textPrimary700 dark:text-textPrimaryDark">
                To start, after you add a bookmark to your collection, you can
                click on the
              </span>
              <HiOutlineStar
                size={24}
                className="text-primary600 mx-1 inline dark:text-primaryDark600"
              />
              <span className="text-textPrimary700 dark:text-textPrimaryDark">
                icon to save it for later read on this page.
              </span>
            </div>
          </div>
        </div>
      </>
    );
}

export default EmptyFavourites
