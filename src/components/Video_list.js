import React from 'react';

import VideoListItem from './Video_list_item';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem 
        onVideoSelect={props.onVideoSelect}
        key={video.etag} 
        video={video}/>
    ); 
  });
  console.log(props.videos);
  return (
    <ul className="container-list">
      {videoItems}
    </ul>
  );
}

export default VideoList