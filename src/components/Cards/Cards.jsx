import React from 'react';
import propTypes from 'prop-types';
import Card from '../Card/Card';

function Cards({ recipesList }) {
  return (
    <section className="cardsContainer">
      {recipesList.map((recipe) => (
        <Card key={recipe.id} recipe={recipe} />
      ))}
    </section>
  );
}

Cards.propTypes = {
  recipesList: propTypes.arrayOf(
    propTypes.exact({
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
    }),
  ).isRequired,
};

export default Cards;
