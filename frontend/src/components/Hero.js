import React from 'react';
import VideoPlayer from './VideoPlayer';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav } from 'react-bootstrap';

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
              <LinkContainer to='/campregistration'>
                <Nav.Link className='btn-1'>Academy Registration</Nav.Link>
              </LinkContainer>

              <a href='#contact-form' className='btn-2'>
                Contact Me
              </a>
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
