import { useState } from "react";
import Button from "./buttons/Button";
import Heading from "./Heading";
import { useNavigate } from "react-router-dom";
import useThemeStore from "../store/useThemeStore";

function CollectionNotFound() {
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);
  const { theme } = useThemeStore();
  const imgSrc =
    theme === "light" ? "/404-kitten-error.png" : "/404-kitten-error-dark.png";
  return (
    <div className="p-5  flex items-center justify-center ">
      <div className="max-w-[800px] flex flex-col items-center justify-center gap-4">
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
          level={2}
          className="text-center text-primary500 dark:text-white text-2xl"
        >
          Sorry, we couldn&apos;t find the collection you&apos;re looking for.
        </Heading>
        <p className="text-center text-lg text-slate-500 dark:text-textPrimaryDark">
          This could be because the collection doesn&apos;t exist, or it might
          have been moved or deleted. Please check if the URL is correct or try
          browsing for your collections in the sidebar on the left.
        </p>
        <Button
          onClick={() => navigate(-1)}
          className="text-primary500 dark:text-primaryDark500 hover:text-primary600 dark:hover:text-primaryDark600 hover:underline"
        >
          Return to the homepage
        </Button>
      </div>
    </div>
  );
}

export default CollectionNotFound;
