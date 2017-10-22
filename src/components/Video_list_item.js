import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelect(video)} >
      <div className="video-image">
        <img src={imageUrl} />
      </div>

      <div className="video-description">
        <p className="title">{video.snippet.title}</p>
        <p className="channel">{video.snippet.channelTitle}</p>
      </div>
    </li>
  );
}; 

export default VideoListItem;