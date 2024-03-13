function BookmarkItemSkeleton({ count }) {
    const skeletonItems = Array.from({ length: count }, (_, index) => (
        <li key={index} className="py-1 mb-3 flex flex-col">
            <div className="flex items-center">
                <div className="w-6 h-6 bg-gray-300 rounded-full mr-2"></div>
                <div className="flex-grow bg-gray-300 h-4"></div>
                <div className="flex min-h-7 ml-3"></div>
            </div>
        </li>
    ));

    return <>{skeletonItems}</>;
}

export default BookmarkItemSkeleton;
