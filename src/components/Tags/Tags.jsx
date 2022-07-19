import React from 'react';
import propTypes from 'prop-types';
import deleteTag from '../../utils/deleteTags';

/**
 *
 * @param {object} props - the props of the component
 * @param {array} props.tags - the list of tags
 * @param {function} props.setTags - Function to set the list of tags
 * @return A list of tags
 */
function Tags({ tags, setTags }) {
  return (
    <div className="tagsContainer">
      {tags.map((tag) => (
        <div className={`tag ${tag[0]}`} key={tag}>
          <p className="tagText">{tag[1]}</p>
          <button
            type="button"
            className={`tagClose ${tag[0]}`}
            onClick={() => deleteTag(tag, tags, setTags)}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}

Tags.propTypes = {
  tags: propTypes.arrayOf(propTypes.arrayOf(propTypes.string)).isRequired,
  setTags: propTypes.func.isRequired,
};

export default Tags;
