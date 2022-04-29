import React from 'react';
import VideoPlayer from './VideoPlayer';

const Hero = ({ minHeight, imgSrc }) => {
  return (
    <section id='hero' className='hero' style={{ minHeight }}>
      <div className='container'>
        <div className='grid-container'>
          <div className='flow'>
            <h1
              style={{ textAlign: 'left' }}
              className='fs-700 letter-spacing-3'
            >
              Lets Get Started
            </h1>
            <p
              style={{ maxWidth: '50ch', textAlign: 'left' }}
              className='fs-400 letter-spacing-3'
            >
              Transform your game today. Sign up for the next clinic or set up a
              personal training session.
            </p>
            <div className='flex'>
              <button className='btn-1'>Camp Registration</button>
              <button className='btn-2'>Contact Me</button>
            </div>
          </div>
          <div className='vid-player-bg'>
            <VideoPlayer />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
