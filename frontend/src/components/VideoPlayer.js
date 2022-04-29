import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = () => {
  return (
    <>
      <ReactPlayer
        className='react-player'
        controls
        url='https://www.youtube.com/watch?v=3VW1P6azZGc'
        height='100%'
        width='100%'
      />
    </>
  );
};

export default VideoPlayer;
