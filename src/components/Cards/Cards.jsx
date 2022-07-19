import React from 'react';
import propTypes from 'prop-types';
import Card from '../Card/Card';

/**
 * 
 * @param {object} props - the props of the component
 * @param {array} props.filterRecipes - the filter list of recipes
 * @returns A React component that takes in an array of recipes and maps over them to create a card for each
recipe.
 */
function Cards({ filterRecipes }) {
  return (
    <section className="cardsContainer">
      {filterRecipes.map((recipe) => (
        <Card key={recipe.id} recipe={recipe} />
      ))}
    </section>
  );
}

Cards.propTypes = {
  filterRecipes: propTypes.arrayOf(
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
