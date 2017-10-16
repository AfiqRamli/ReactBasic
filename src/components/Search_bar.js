
import React from 'react';

export default class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {term: ''};
  }

  render(){
    return (
      <div>
        <input 
        placeholder="Search"
        onChange={(e) => this.setState({ term: e.target.value})}  className="col s12 m8 l6"/>
      </div>
    ); 
  }
}
