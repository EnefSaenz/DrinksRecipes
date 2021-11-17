import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

// Create Context
export const DrinksContext = createContext();

// Provider (functions)
const DrinksProvider = (props) => {
  // Context States
  const [drinks, setDrinks] = useState([]);
  const [consult, setConsult] = useState(false);
  const [searchDrinks, setSearchDrinks] = useState({
    ingredient: "",
    category: "",
  });

  useEffect(() => {
    if (consult) {
      const getDrinks = async () => {
        const { ingredient, category } = searchDrinks;
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}&c=${category}`;
        const drinks = await axios.get(url);
        setDrinks(drinks.data.drinks);
      };
      getDrinks();
    }
  }, [searchDrinks, consult]);

  return (
    <DrinksContext.Provider value={{ drinks, setSearchDrinks, setConsult }}>
      {props.children}
    </DrinksContext.Provider>
  );
};

export default DrinksProvider;
