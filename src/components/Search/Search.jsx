import React from 'react';
import propTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import filteredList from '../../utils/dataManager';

/**
 * It's a React component that renders a search input and a search icon
 * @param {object} props - props passed from parent component
 * @param {function} props.setSearchValueArray - Function to set the value of the search input
 * @return A search bar with a label and an icon.
 */
function Search({ setSearchValueArray }) {
  return (
    <section className="search">
      <input
        type="text"
        name="search"
        id="search"
        className="searchInput"
        placeholder="Rechercher une recette"
        onChange={(e) => {
          setSearchValueArray(e.target.value.split(' '));
        }}
      />
      <label htmlFor="search" className="searchLabel">
        <FontAwesomeIcon icon={faSearch} className="searchIcon" />
      </label>
    </section>
  );
}

Search.propTypes = {
  setSearchValueArray: propTypes.func.isRequired,
};

export default Search;
