import React, { useContext } from "react";
import { DrinksContext } from "../context/DrinksContext";
import Drink from "./Drink";

const DrinksList = () => {
  // Context
  const { drinks } = useContext(DrinksContext);

  return (
    <div className="row mt-5">
      {drinks.map((drink) => (
        <Drink key={drink.idDrink} drink={drink} />
      ))}
    </div>
  );
};

export default DrinksList;
