import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

// Create Context
export const RecipeContext = createContext();

// Provider (functions)
const RecipeProvider = (props) => {
  // Context States
  const [idRecipe, setIdRecipe] = useState(null);
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    const getRecipe = async () => {
      if (!idRecipe) return;

      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idRecipe}`;
      const recipe = await axios.get(url);
      setRecipe(recipe.data.drinks[0]);
    };

    getRecipe();
  }, [idRecipe]);

  return (
    <RecipeContext.Provider value={{ recipe, setIdRecipe, setRecipe }}>
      {props.children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;
