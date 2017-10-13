
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
        
        onChange={(e) => this.setState({ term: e.target.value})}/>
      </div>
    ); 
  }
}
