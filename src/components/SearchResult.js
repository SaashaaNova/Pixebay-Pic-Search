import React from "react";
import PropTypes from "prop-types";

const SearchResult = ({ imgs = [] }) => (
  <div className='search-result-cnt'>
    {imgs.map( picture => (
      <div key={picture.id}>
        <a href={picture.pageURL} target="_blank" rel="noopener noreferrer">
          <img src={picture.webformatURL} alt=""/>
        </a>
      </div>
    ))}
  </div>
);

SearchResult.propTypes = {
    imgs: PropTypes.array
};

export default SearchResult;