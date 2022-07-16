import React from 'react';
import propTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import displayQuantityAndUnit from '../../utils/cardsManager';

function Card({ recipe }) {
  return (
    <article className="card">
      <div className="imgContainer">
        <img src="../assets/logo.svg" alt={recipe.name} className="logo" />
      </div>
      <div className="cardContent">
        <div className="cardContentNameAndTime">
          <h3 className="cardContentName">{recipe.name}</h3>
          <div className="cardContentTime">
            <FontAwesomeIcon icon={faClock} className="faClock" />
            <p className="cardContentTimeText">{`${recipe.time} min`}</p>
          </div>
        </div>
        <div className="cardContentIngredientsAndRecipe">
          <ul className="cardContentIngredients">
            {recipe.ingredients.map((ingredient, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={`${ingredient} ${index}`}>
                <span className="cardContentIngredient">{`${ingredient.ingredient}:`}</span>
                {displayQuantityAndUnit(ingredient)}
              </li>
            ))}
          </ul>
          <p className="cardContentRecipe">{recipe.description}</p>
        </div>
      </div>
    </article>
  );
}

Card.propTypes = {
  recipe: propTypes.exact({
    id: propTypes.number.isRequired,
    name: propTypes.string.isRequired,
    servings: propTypes.number.isRequired,
    ingredients: propTypes.arrayOf(
      propTypes.objectOf(
        propTypes.oneOfType([propTypes.number, propTypes.string]),
      ),
    ).isRequired,
    time: propTypes.number.isRequired,
    description: propTypes.string.isRequired,
    appliance: propTypes.string.isRequired,
    ustensils: propTypes.arrayOf(propTypes.string).isRequired,
  }).isRequired,
};

export default Card;
