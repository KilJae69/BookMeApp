import { useState } from "react";
import Heading from "../../components/Heading";
import useThemeStore from "../../store/useThemeStore";

function EmptySearch() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { theme } = useThemeStore();
  const imgSrc = theme === "light" ? "/curious-light.gif" : "/curious.gif";
  return (
    <div className="p-5 bg-bgPrimary50 dark:bg-bgDarkPrimary">
      <div className="flex flex-col items-center justify-center gap-3">
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
        <Heading
          level={1}
          className="text-center text-primary500 dark:text-white text-2xl"
        >
          Sorry, we couldn&apos;t find any bookmarks for your search.
        </Heading>
      </div>
    </div>
  );
}

export default EmptySearch;
