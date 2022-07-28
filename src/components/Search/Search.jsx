import React from 'react';
import propTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

/**
 * It's a React component that renders a search input and a search icon
 * @component
 * @param {object} props - props passed from parent component
 * @param {function} props.setsearchValue - Function to set the value of the search input
 * @return {React.ReactElement} A search bar with a label and an icon.
 */
function Search({ setsearchValue }) {
  return (
    <section className="search">
      <input
        type="text"
        name="search"
        id="search"
        className="searchInput"
        placeholder="Rechercher une recette"
        onChange={(e) => {
          if (e.target.value.toLowerCase().trim().length > 2) {
            setsearchValue(e.target.value.toLowerCase().trim());
          } else {
            setsearchValue('');
          }
        }}
      />
      <label htmlFor="search" className="searchLabel">
        <FontAwesomeIcon icon={faSearch} className="searchIcon" />
      </label>
    </section>
  );
}

Search.propTypes = {
  setsearchValue: propTypes.func.isRequired,
};

export default Search;
