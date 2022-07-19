import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import Dropdown from '../Dropdown/Dropdown';
import { getCategoriesList } from '../../utils/dropdownsManager';

/**
 *
 * @param {object} props
 * @param {array} props.filterRecipes - the filter list of recipes
 * @param {array} props.tags - the list of tags
 * @param {function} props.setTags - Function to set the list of tags
 * @return A dropdowns's group with a list of recipes and a button to open/close it
 */
function Dropdowns({ filterRecipes, tags, setTags }) {
  console.log({ filterRecipes });
  const [inputValue, setInputValue] = useState('');
  const [tagsList, setTagsList] = useState({
    ingredients: getCategoriesList(
      filterRecipes,
      'ingredients',
      tags,
      inputValue,
    ),
    appareils: getCategoriesList(filterRecipes, 'appliance', tags, inputValue),
    ustensiles: getCategoriesList(filterRecipes, 'ustensils', tags, inputValue),
  });
  console.log({ tagsList });
  const [isOpen, setIsOpen] = useState({
    ingredients: false,
    appareils: false,
    ustensiles: false,
  });

  useEffect(() => {
    setTagsList({
      ingredients: getCategoriesList(
        filterRecipes,
        'ingredients',
        tags,
        inputValue,
      ),
      appareils: getCategoriesList(
        filterRecipes,
        'appliance',
        tags,
        inputValue,
      ),
      ustensiles: getCategoriesList(
        filterRecipes,
        'ustensils',
        tags,
        inputValue,
      ),
    });
  }, [filterRecipes, tags, inputValue]);

  return (
    <section className="dropdowns">
      <Dropdown
        list={tagsList.ingredients}
        categorie="ingredients"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        tags={tags}
        setTags={setTags}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <Dropdown
        list={tagsList.appareils}
        categorie="appareils"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        tags={tags}
        setTags={setTags}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <Dropdown
        list={tagsList.ustensiles}
        categorie="ustensiles"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        tags={tags}
        setTags={setTags}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
    </section>
  );
}

Dropdowns.propTypes = {
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
  setTags: propTypes.func.isRequired,
  tags: propTypes.arrayOf(propTypes.arrayOf(propTypes.string)).isRequired,
};

export default Dropdowns;
