import React, { useContext, useState } from "react";
import { RecipeContext } from "../context/RecipeContext";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 450,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    overflow: "scroll",
    height: "100%",
  },
}));

const Drink = ({ drink }) => {
  const { idDrink, strDrink, strDrinkThumb } = drink;

  // Modal UI config
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Context
  const { recipe, setIdRecipe, setRecipe } = useContext(RecipeContext);

  // Show ingredients
  const showIngredients = (recipe) => {
    let ingredients = [];
    for (let i = 1; i < 16; i++) {
      if (recipe[`strIngredient${i}`]) {
        ingredients.push(
          <li>
            {recipe[`strIngredient${i}`]} {recipe[`strMeasure${i}`]}
          </li>
        );
      }
    }
    return ingredients;
  };

  return (
    <div className="col-md-4 mb-2">
      <div className="card">
        <h2 className="card-header">{strDrink}</h2>

        <img
          className="card-img-top"
          src={strDrinkThumb}
          alt={`Drink view for ${strDrink}`}
        />

        <div className="card-body">
          <button
            type="button"
            className="btn btn-primary btn-block"
            onClick={() => {
              setIdRecipe(idDrink);
              handleOpen();
            }}
          >
            Show recipe
          </button>

          <Modal
            open={open}
            onClose={() => {
              setIdRecipe(null);
              setRecipe({});
              handleClose();
            }}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
          >
            <div style={modalStyle} className={classes.paper}>
              <h2 id="modal-title">
                {recipe.strDrink}
                <button
                  type="button"
                  className="close"
                  aria-label="Close"
                  onClick={() => {
                    setIdRecipe(null);
                    setRecipe({});
                    handleClose();
                  }}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </h2>

              <h3 className="mt-4">Instructions</h3>
              <p id="modal-description">{recipe.strInstructions}</p>

              <img
                className="img-fluid my-4"
                src={recipe.strDrinkThumb}
                alt="Drink view"
              />

              <h3>Ingredients and measures</h3>
              <ul>{showIngredients(recipe)}</ul>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

Drink.propTypes = {
  drink: PropTypes.object.isRequired,
};

export default Drink;
