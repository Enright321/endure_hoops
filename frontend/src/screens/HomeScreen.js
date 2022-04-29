import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PopupMessage from '../components/PopupMessage';
import About from '../components/About';
import VideoPlayer from '../components/VideoPlayer';
import Hero from '../components/Hero';
import Sponsors from '../components/Sponsors';
import Testimonials from '../components/Testimonials';

const HomeScreen = () => {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <>
      <Hero minHeight={'80vh'} imgSrc={'../images/hero.JPG'} />
      <Sponsors />
      <About />
      <Testimonials />
    </>
  );
};

export default HomeScreen;
