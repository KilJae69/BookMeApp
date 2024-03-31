function SearchResultsSkeleton() {
  return (
    <div className="animate-pulse p-10">
      <div className="mb-3">
        <div className="h-8 bg-gray-300 rounded w-48 mb-2"></div>
        <div className="h-6 bg-gray-300 rounded w-32 mb-4"></div>
      </div>
      <ul className="space-y-4">
        {Array.from({ length: 2 }).map((_, index) => (
          <li key={index} className="py-5">
            <div className="flex gap-3 items-center mb-3">
              <div className="h-8 w-8 bg-gray-300 rounded"></div>
              <div className="h-6 bg-gray-300 rounded w-full max-w-[200px]"></div>
            </div>
            <ul className="space-y-2">
              {Array.from({ length: 2 }).map((_, catIndex) => (
                <li key={catIndex}>
                  <div className="flex gap-3 items-center mb-2">
                    <div className="h-4 w-4 bg-gray-300 rounded"></div>
                    <div className="h-4 bg-gray-300 rounded w-full max-w-[150px]"></div>
                  </div>
                  <ul className="space-y-1">
                    {Array.from({ length: 2 }).map((_, bookmarkIndex) => (
                      <li
                        key={bookmarkIndex}
                        className="h-4 bg-gray-300 rounded w-full max-w-[250px]"
                      ></li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default SearchResultsSkeleton;