

import ExpandableCategoryCard from "../../ui/ExpandableCategoryCard";


function CategoriesList({ categories}) {


  return (
    <ul
      role="list"
      className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-1 sm:gap-6 lg:grid-cols-2"
    >
      {categories.map((category) => (
        <ExpandableCategoryCard key={category.id} category={category} />
      ))}
    </ul>
  );
}

export default CategoriesList;
