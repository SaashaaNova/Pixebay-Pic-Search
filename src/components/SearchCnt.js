import React from "react";
import Search from "./Search";

import fetchImgs from "../api/api";

class SearchCnt extends React.Component {
  state = {
    imgs: []
  };

  performSearch = (event) => {

      return fetchImgs(event).then(data =>
      this.setState({ 
        imgs: data.hits
        })
    );  
  };

  render() {

    return (
      <Search
        performSearch={this.performSearch}
        imgs={this.state.imgs}
      />
    );
  }
}

export default SearchCnt;