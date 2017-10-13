// npm package refs
import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
// React components refs
import SearchBar from './components/Search_bar';
import VideoList from './components/Video_list';
// Youtube API Key to use YT search services
const API_KEY = 'AIzaSyBF_s_Xf5wRZmsyeZ8-0trBK6CxBWOJeD0';

class App extends React.Component {
  constructor() {
    super();
    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'},(videos)=> {this.setState({videos});
    });
  }

  render(){
    return(
      <div>
        <SearchBar/>
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}


ReactDOM.render(
  <App/>, document.getElementById('container')
);