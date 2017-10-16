
// npm package refs
import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

// React components refs
import SearchBar from './components/Search_bar';
import VideoList from './components/Video_list';
import VideoDetail from './components/Video_detail';

// Youtube API Key to use YT search services
const API_KEY = 'AIzaSyBF_s_Xf5wRZmsyeZ8-0trBK6CxBWOJeD0';
class App extends React.Component {
  constructor() {
    super();
    this.state = { 
      videos: [],
      selectedVideo: null
    };

    YTSearch({key: API_KEY, term: 'coldplay'},(videos)=> {this.setState({
        videos: videos,
        selectedVideo:videos[0]    
      });
    });
  }

  render(){
    return(
      <div className="row container">
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}


ReactDOM.render(
  <App/>, document.getElementById('container')
);