import React, { useContext, useEffect } from "react";
import { myContext } from "../../context/Context";
import "./Categories.scss"

function Categories() {
  const { fetchCategories, categories } = useContext(myContext);
  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);
  console.log(categories, "categories");
  return (
    <div className="categories">
      {categories.map((category) => (
        <div key={category.idMeal}>
          <img src={category.strMealThumb} alt="#" />
          <h4>{category.strMeal}</h4>
        </div>
      ))}
    </div>
  );
}

export default Categories;
