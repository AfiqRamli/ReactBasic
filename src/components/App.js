import React from 'react';
import ReactDOM from 'react-dom';

export default class App extends React.Component {
  constructor(){
    super();
    this.state={title: "Video Searches"};
  }

  render() {
    return <h2>{this.state.title}</h2>
  }
}