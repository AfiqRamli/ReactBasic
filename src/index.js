
// npm package refs
import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

// React components refs
import SearchBar from './components/Search_bar';
import VideoList from './components/Video_list';
import VideoDetail from './components/Video_detail';

// Import styles
import Styles from './sass/app.scss';

// Youtube API Key to use YT search services
const API_KEY = 'AIzaSyBF_s_Xf5wRZmsyeZ8-0trBK6CxBWOJeD0';
class App extends React.Component {
  constructor() {
    super();
    this.state = { 
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term},(videos)=> {this.setState({
        videos: videos,
        selectedVideo:videos[0]    
      });
    });
  }

  render(){
    // Adding a delay using lodash of 300ms
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

    return(
      <div className="container-main">
        <SearchBar onSearchTermChange={videoSearch}/>
        <div className="container-videos">
          <VideoDetail video={this.state.selectedVideo}/>
          <VideoList 
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
            videos={this.state.videos} />
        </div>
        
      </div>
    );
  }
}


ReactDOM.render(
  <App/>, document.getElementById('container')
);