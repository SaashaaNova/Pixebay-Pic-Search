import React from "react";
import SearchResults from "./SearchResult";
import PropTypes from "prop-types";

class Search extends React.Component {
    state = {
        value: ""
    };

    handleChange = event => {
        let value = event.target.value;

        this.setState({
            value
        });
        this.props.performSearch(value);
    };

    handleSubmit = event => {
        event.preventDefault();
    };

    render() {
        return (
            <div className="search-cnt">
                <h1>The Pixabay Images Search</h1>
                <div className="search-form-cnt">
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            value={this.state.value}
                            onChange={this.handleChange}
                            placeholder="What kind of pic are you looking for ?"
                        />
                    </form>
                </div>

                <SearchResults imgs={this.props.imgs} />
            </div>
        );
    }
}

Search.propTypes = {
    performSearch: PropTypes.func,
    imgs: PropTypes.array
};

export default Search;
