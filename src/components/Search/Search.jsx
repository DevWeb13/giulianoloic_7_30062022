import React from 'react';
import propTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

/**
 * It's a React component that renders a search input and a search icon
 * @param {object} props - props passed from parent component
 * @param {string} props.searchValue - The value of the search input
 * @param {function} props.setSearchValue - Function to set the value of the search input
 * @returns A search bar with a label and an icon.
 */

function Search({ searchValue, setSearchValue }) {
  return (
    <section className="search">
      <input
        type="text"
        name="search"
        id="search"
        className="searchInput"
        placeholder="Rechercher une recette"
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
      />
      <label htmlFor="search" className="searchLabel">
        <FontAwesomeIcon icon={faSearch} className="searchIcon" />
      </label>
    </section>
  );
}

Search.propTypes = {
  searchValue: propTypes.string.isRequired,
  setSearchValue: propTypes.func.isRequired,
};

export default Search;
