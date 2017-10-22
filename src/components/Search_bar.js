
import React from 'react';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {term: ''};
  }

  render(){
    return (
      <div className="container-search">
        <input 
        placeholder="Search"
        onChange={(e) => this.onInputChange(e.target.value)}  className="search-input"/>
        <button className="btn-search">search</button>
      </div>
    ); 
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}
