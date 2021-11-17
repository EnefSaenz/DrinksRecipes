import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

// Create Context
export const CategoriesContext = createContext();

// Provider (functions)
const CategoriesProvider = (props) => {
  // Context State
  const [categories, setCategories] = useState([]);

  // useEffect for calling API
  useEffect(() => {
    const getCategories = async () => {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;

      const categories = await axios.get(url);

      setCategories(categories.data.drinks);
    };
    getCategories();
  }, []);

  return (
    <CategoriesContext.Provider value={{ categories }}>
      {props.children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesProvider;
