import React from 'react';

const VideoDetail = ({video}) => {
  if(!video) {
    return <div>Loading...</div>;
  }
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-display">
      <iframe className="video" src={url} allowfullscreen></iframe>
      <p className="title">{video.snippet.title}</p>
      <p className="description">{video.snippet.description}</p>
    </div>
  );
}

export default VideoDetail;