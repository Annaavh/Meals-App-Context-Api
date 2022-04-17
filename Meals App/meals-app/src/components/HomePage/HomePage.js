import React, { useEffect, useState, useContext, useCallback } from "react";
import { myContext } from "../../context/Context";
import "./HomePage.scss";

function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");

  const { fetchHomePageMeals, meals } = useContext(myContext);
  // console.log(meals[0].idMeal)
  const fetchMealsHandler = useCallback(() => {
    fetchHomePageMeals(searchTerm);
  }, [searchTerm, fetchHomePageMeals]);
  return (
    <div className="home">
      <div className="home-search">
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          type="text"
          placeholder="Type a meal name ..."
        />
        <button onClick={fetchMealsHandler}>Search Meal</button>
      </div>

      <div className="home-grid">
        {meals ? (
          meals.map((meal) => (
            <div className="home-meal" key={meal.idMeal}>
              <img src={meal.strMealThumb} alt="#" />
              <h4>{meal.strMeal}</h4>
            </div>
          ))
        ) : (
          <h2>No meals found! Try another word...</h2>
        )}
      </div>
    </div>
  );
}

export default HomePage;
