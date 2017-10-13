import React from 'react';

import VideoListItem from './Video_list_item';

const VideoList = (props) => {
  props.videos.map((video) => {
    <VideoListItem video={video}/>
  });

  <ul className="row">
    {props.videos.length}
  </ul>
}

export default VideoList;