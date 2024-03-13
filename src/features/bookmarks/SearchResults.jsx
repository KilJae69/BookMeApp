import BookmarkItem from "./BookmarkItem"

function SearchResults({searchResults}) {
    return (
        <div>
            <ul>
                {searchResults.map((bookmark) => (
                    <BookmarkItem key={bookmark.id} categoryColor={bookmark.categories.color} bookmark={bookmark}/>
                        
                ))}
            </ul>
        </div>
    )
}

export default SearchResults
