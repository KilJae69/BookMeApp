import { Disclosure } from "@headlessui/react";

import CategoriesItem from "../features/categories/CategoriesItem";
import { applyCategoryTheme } from "../helpers/applyCategoryTheme";


function ExpandableCategoryCard({ category }) {
  const { color } = category;
  const theme = applyCategoryTheme(color);
  return (
    <li className="w-full px-4">
      <div className="mx-auto w-full max-w-md rounded-2xl p-2">
        <Disclosure>
          {() => (
            <>
              <Disclosure.Button
                as="div"
                role="button"
                tabIndex={0}
                className="flex text-center w-full rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-rose-200"
              >
                <CategoriesItem category={category} theme={theme} />
              </Disclosure.Button>
              <Disclosure.Panel
                className={`${theme.background} px-4 pb-2 pt-4 text-sm text-gray-500`}
              >
            
                <p>Category details</p>
                <ul>
                  <li>Bookmark 1</li>
                  <li>Bookmark 2</li>
                  <li>Bookmark 3</li>
                  <li>Bookmark 4</li>
                  <li>Bookmark 5</li>
                  <li>Bookmark 6</li>
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </li>
  );
}

export default ExpandableCategoryCard;
