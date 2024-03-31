function CategoriesSkeletonLoader({ count = 10 }) {
  return (
    <div className="p-5">
      {/* Heading Skeleton */}
      <div className="animate-pulse flex justify-center mb-10">
        <div className="rounded-lg bg-gray-300 dark:bg-gray-600 h-8 w-1/4"></div>
      </div>

      {/* Categories List Skeleton */}
      <ul
        role="list"
        className="grid grid-cols-1 gap-5 md:grid-cols-2 sm:gap-6 xl:grid-cols-3"
      >
        {[...Array(count).keys()].map((index) => (
          <li
            key={index}
            className="animate-pulse min-h-[48px] relative break-inside-avoid min-w-0 bg-gray-300 dark:bg-gray-600 rounded-lg shadow-md"
          >
            {/* Simulating the Disclosure Button */}
            <div className="w-full flex flex-col rounded-md p-2">
              <div className="flex items-center justify-between rounded-md">
                <div className="flex items-center">
                  {/* Simulating the icon */}
                  <div className="h-6 w-6 bg-gray-200 dark:bg-gray-500 rounded-full mr-2"></div>
                  {/* Simulating the category name */}
                </div>
                <div className="h-4 bg-gray-200 dark:bg-gray-500 rounded w-3/4 p-3"></div>
                {/* Simulating the edit and delete buttons */}
                <div className="flex">
                  <div className="h-1 w-1 bg-gray-200 dark:bg-gray-500 rounded-full mr-1"></div>
                  <div className="h-1 w-1 bg-gray-200 dark:bg-gray-500 rounded-full mr-1"></div>
                  <div className="h-1 w-1 bg-gray-200 dark:bg-gray-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoriesSkeletonLoader;
