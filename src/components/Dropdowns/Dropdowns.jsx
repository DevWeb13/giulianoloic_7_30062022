import React, { useState } from 'react';
import propTypes from 'prop-types';
import Dropdown from '../Dropdown/Dropdown';
import { getCategoriesList } from '../../utils/dropdownsManager';

/**
 *
 * @param {object} props
 * @param {array} props.recipesList - the list of recipes
 * @param {array} props.tags - the list of tags
 * @param {function} props.setTags - Function to set the list of tags
 * @return A dropdowns's group with a list of recipes and a button to open/close it
 */
function Dropdowns({ recipesList, tags, setTags }) {
  const [list, setList] = useState({
    ingredients: getCategoriesList(recipesList, 'ingredients'),
    appareils: getCategoriesList(recipesList, 'appliance'),
    ustensiles: getCategoriesList(recipesList, 'ustensils'),
  });
  const [isOpen, setIsOpen] = useState({
    ingredients: false,
    appareils: false,
    ustensiles: false,
  });

  return (
    <section className="dropdowns">
      <Dropdown
        list={list.ingredients}
        categorie="ingredients"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        tags={tags}
        setTags={setTags}
      />
      <Dropdown
        list={list.appareils}
        categorie="appareils"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        tags={tags}
        setTags={setTags}
      />
      <Dropdown
        list={list.ustensiles}
        categorie="ustensiles"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        tags={tags}
        setTags={setTags}
      />
    </section>
  );
}

Dropdowns.propTypes = {
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
  setTags: propTypes.func.isRequired,
  tags: propTypes.arrayOf(propTypes.arrayOf(propTypes.string)).isRequired,
};

export default Dropdowns;
