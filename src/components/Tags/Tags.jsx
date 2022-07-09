import React from 'react';
import propTypes from 'prop-types';
import deleteTag from '../../utils/tagsManager';

function Tags({ tags, setTags }) {
  return (
    <div className="tagsContainer">
      {tags.map((tag) => (
        <div className="tag" key={tag}>
          <p className="tagText">{tag}</p>
          <button
            type="button"
            className="tagClose"
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
  tags: propTypes.arrayOf(propTypes.string).isRequired,
  setTags: propTypes.func.isRequired,
};

export default Tags;
