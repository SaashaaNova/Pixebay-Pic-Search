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
      <div>
        <h1>The Pixabay Images Search</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </form>
        <div>
          <SearchResults imgs={this.props.imgs} />
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  performSearch: PropTypes.func,
  imgs: PropTypes.array
};

export default Search;