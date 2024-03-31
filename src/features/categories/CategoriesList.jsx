import CategoriesItem from "./CategoriesItem";

function CategoriesList({ categories }) {
  return (
    <ul
      role="list"
      className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 sm:gap-6 xl:grid-cols-3"
    >
      {categories.map((category) => (
        <li key={category.id} className="relative break-inside-avoid min-w-0">
          <CategoriesItem category={category} />
        </li>
      ))}
    </ul>
  );
}

export default CategoriesList;
