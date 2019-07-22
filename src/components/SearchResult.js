import React from "react";
import PropTypes from "prop-types";

const SearchResults = ({ imgs = [] }) => (
    <div className="search-result-cnt">
        {imgs.map(picture => (
            <div key={picture.id}>
                <a
                    href={picture.pageURL}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={picture.webformatURL} alt="" />
                </a>
            </div>
        ))}
    </div>
);

SearchResults.propTypes = {
    imgs: PropTypes.array
};

export default SearchResults;
