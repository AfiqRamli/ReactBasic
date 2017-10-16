import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelect(video)} className="card horizontal">
      <div className="card-image">
        <img src={imageUrl} />
      </div>
      <div className="card-stacked">
        <div className="card-content">
          <p><strong>{video.snippet.title}</strong></p>
          <p>{video.snippet.channelTitle}</p>
        </div>
      </div>
      
    </li>
  );
}; 

export default VideoListItem;