import React from 'react';

const VideoDetail = ({video}) => {
  if(!video) {
    return <div>Loading...</div>;
  }
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="col s12 m7">
      <div className="card">
        <div className="video-container">
          <iframe src={url}></iframe>
        </div>
        <div className="card-content">
          <span className="card-title"><strong>{video.snippet.title}</strong></span>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    </div>
  );
}

export default VideoDetail;