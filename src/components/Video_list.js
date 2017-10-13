import React from 'react';

import VideoListItem from './Video_list_item';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return <VideoListItem key={video.etag} video={video}/>
  });
  
  return (
    <ul className="collection col s12 m8">
      {videoItems}
    </ul>
  );
}

export default VideoList