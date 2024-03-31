
import Heading from "../components/Heading";
import Button from "../components/buttons/Button";
import FavouritesTab from "../features/favourites/FavouritesTab";


function FavouritesPage() {
    
 
    return (
      <div className="flex flex-col items-center justify-center gap-2 pt-5 px-2 sm:px-5">
        <Heading
          className="text-xl md:text-3xl text-primary600 dark:text-white"
          level={1}
        >
          Your favourite bookmarks
        </Heading>
        <Button className="mt-3 text-xl" to={-1} variation="link">
          Go back
        </Button>

        <FavouritesTab />
      </div>
    );
}

export default FavouritesPage
