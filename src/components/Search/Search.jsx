import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Search() {
  return (
    <section className="search">
      <input
        type="text"
        name="search"
        id="search"
        className="searchInput"
        placeholder="Rechercher une recette"
      />
      <label htmlFor="search" className="searchLabel">
        <FontAwesomeIcon icon={faSearch} className="searchIcon" />
      </label>
    </section>
  );
}

export default Search;
