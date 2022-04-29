import React, { useState } from 'react';
import About from '../components/About';
import Hero from '../components/Hero';
import Sponsors from '../components/Sponsors';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';

const HomeScreen = () => {
  return (
    <>
      <Hero minHeight={'80vh'} imgSrc={'../images/hero.JPG'} />
      <Sponsors />
      <About />
      <Testimonials />
      <ContactForm />
    </>
  );
};

export default HomeScreen;
