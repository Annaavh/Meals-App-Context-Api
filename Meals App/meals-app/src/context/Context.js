import React, { createContext, useCallback, useState } from "react";
import axios from "axios";

export const myContext = createContext();

export const AppContext = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [categories, setCategories] = useState([]);
  const [randomMeal, setRandomMeal] = useState([]);

  const fetchHomePageMeals = useCallback((searchTerm) => {
    try {
      axios
        .get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
        )
        .then((res) => {
          console.log(res.data.meals);
          setMeals(res.data.meals);
        });
    } catch (err) {
      console.log(err, "err");
    }
  }, []);
  const fetchCategories = useCallback(() => {
    try {
      axios
        .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`)
        .then((res) => {
          console.log(res.data.meals,"cat");
          setCategories(res.data.meals);
        });
    } catch (err) {
      console.log(err, "err");
    }
  }, []);
  const fetchRandomMeal = useCallback(() => {
    try {
      axios
        .get(`https://www.themealdb.com/api/json/v1/1/random.php`)
        .then((res) => {
          console.log(res.data.meals,"rnd");
          setRandomMeal(res.data.meals);
        });
    } catch (err) {
      console.log(err, "err");
    }
  }, []);
  return (
    <myContext.Provider
      value={{fetchRandomMeal,randomMeal, fetchHomePageMeals, meals, fetchCategories, categories }}
    >
      {children}
    </myContext.Provider>
  );
};
