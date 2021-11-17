import React from "react";
import DrinksList from "./components/DrinksList";
import Form from "./components/Form";
import Header from "./components/Header";
import CategoriesProvider from "./context/CategoriesContext";
import DrinksProvider from "./context/DrinksContext";
import RecipeProvider from "./context/RecipeContext";

function App() {
  return (
    <CategoriesProvider>
      <DrinksProvider>
        <RecipeProvider>
          <Header title="Search for drinks!" />

          <div className="container mt-5">
            <div className="row">
              <Form />
            </div>

            <DrinksList />
          </div>
        </RecipeProvider>
      </DrinksProvider>
    </CategoriesProvider>
  );
}

export default App;
