import React from 'react';

const VideoListItem = ({video}) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li className="collection-item avatar">
      <img src={imageUrl} className="circle" />
      <span className="title">{video.snippet.title}</span>
      <p>{video.snippet.description}</p>
    </li>
  );
}; 

export default VideoListItem;