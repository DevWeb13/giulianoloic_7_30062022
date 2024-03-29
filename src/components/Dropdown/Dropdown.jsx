import React from 'react';
import propTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { openCloseDropdowns, addUpperCase } from '../../utils/dropdownsManager';

/**
 * A function that returns a dropdown with a list of items and a button to open/close it.
 * @component
 * @param {object} props
 * @param {array} props.list - the list of items
 * @param {string} props.categorie - the name of the category
 * @param {object} props.isOpen - the state of the dropdown
 * @param {function} props.setIsOpen - Function to set the state of the dropdown
 * @param {Array} props.tags - the list of tags
 * @param {function} props.setTags - Function to set the list of tags
 * @param {string} props.inputValue - the value of the input
 * @param {function} props.setInputValue - Function to set the value of the input
 * @param {function} props.setTags - Function to set the list of tags
 * @return {React.ReactElement} A dropdown with a list of items and a button to open/close it
 */
function Dropdown({
  list,
  categorie,
  isOpen,
  setIsOpen,
  tags,
  setTags,
  inputValue,
  setInputValue,
}) {
  return (
    <div className="dropdownContainer">
      {!isOpen[categorie] ? (
        <button
          type="button"
          className={`dropdownButton ${categorie}`}
          onClick={() => {
            setIsOpen(openCloseDropdowns(isOpen, categorie));
            setInputValue('');
          }}
        >
          <label htmlFor={categorie} className="dropdownLabel">
            {addUpperCase(categorie)}
          </label>
          <div className="iconContainer">
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
        </button>
      ) : (
        <>
          <div className={`dropdownButton ${categorie} dropdownButtonOpen`}>
            <label htmlFor={categorie} className="dropdownLabel">
              {addUpperCase(categorie)}
            </label>
            <input
              className="dropdownInput"
              type="text"
              name={categorie}
              id={categorie}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              readOnly={!isOpen}
              placeholder={`Rechercher un ${categorie}`}
            />
            <button
              type="button"
              className="iconContainer"
              onClick={() => {
                setIsOpen({ ...isOpen, [categorie]: false });
                setInputValue('');
              }}
            >
              <FontAwesomeIcon icon={faAngleUp} />
            </button>
          </div>
          <ul className={`dropdownList ${categorie}`}>
            {list.map((item) => (
              <option
                key={item}
                className={`dropdownListItem ${categorie}`}
                onClick={() => {
                  setIsOpen({ ...isOpen, [categorie]: false });
                  setTags([...tags, [categorie, item]]);
                  setInputValue('');
                }}
              >
                {item}
              </option>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

Dropdown.propTypes = {
  list: propTypes.arrayOf(propTypes.string).isRequired,
  categorie: propTypes.string.isRequired,
  isOpen: propTypes.objectOf(propTypes.bool).isRequired,
  setIsOpen: propTypes.func.isRequired,
  setTags: propTypes.func.isRequired,
  tags: propTypes.arrayOf(propTypes.arrayOf(propTypes.string)).isRequired,
  inputValue: propTypes.string.isRequired,
  setInputValue: propTypes.func.isRequired,
};

export default Dropdown;
