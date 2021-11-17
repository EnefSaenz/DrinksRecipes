import React, { useContext, useState } from "react";
import Error from "./Error";
import { CategoriesContext } from "../context/CategoriesContext";
import { DrinksContext } from "../context/DrinksContext";

const Form = () => {
  // States
  const [search, setSearch] = useState({
    ingredient: "",
    category: "",
  });
  const [error, setError] = useState(false);

  //Contexts
  const { categories } = useContext(CategoriesContext);
  const { setSearchDrinks, setConsult } = useContext(DrinksContext);

  // Update state
  const updateState = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  // Submit form
  const submitForm = (e) => {
    e.preventDefault();
    if (search.category.trim() === "") {
      setError(true);
      return;
    }

    setError(false);
    setSearchDrinks(search);
    setConsult(true);
  };

  return (
    <form className="col-12" onSubmit={submitForm}>
      {error ? <Error message="You must choose a category at least" /> : null}

      <fieldset className="text-center">
        <legend>Search drinks by category or by ingredient</legend>
      </fieldset>

      <div className="row mt-4">
        <div className="col-md-4 mb-2">
          <input
            name="ingredient"
            className="form-control"
            type="text"
            placeholder="Ingredient here!"
            onChange={updateState}
          />
        </div>

        <div className="col-md-4 mb-2">
          <select
            className="form-control"
            name="category"
            onChange={updateState}
          >
            <option value="">-- Select Category --</option>
            {categories.map((category) => (
              <option key={category.strCategory} value={category.strCategory}>
                {category.strCategory}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-4">
          <button
            type="submit"
            className="btn btn-primary btn-block"
            value="Search"
          >
            Search Drinks
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
