
import React from 'react';

export default class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {term: ''};
  }

  render(){
    return (
      <div className="container-search">
        <input 
        placeholder="Search"
        onChange={(e) => this.setState({ term: e.target.value})}  className="search-input"/>
        <button className="btn-search">search</button>
      </div>
    ); 
  }
}
