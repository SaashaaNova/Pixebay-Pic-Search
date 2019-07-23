import React from "react";
import PropTypes from "prop-types";

const SearchResult = ({ imgs = [] }) => (
  <div className='search-result-cnt'>
    <ul>
      {imgs.map( picture => (
        <li key={picture.id}>
          <a href={picture.pageURL} target="_blank" rel="noopener noreferrer">
            <img src={picture.webformatURL} alt=""/>
          </a>
        </li>
      ))}
    </ul>
  </div> 
);

SearchResult.propTypes = {
    imgs: PropTypes.array
};

export default SearchResult;