import React from 'react';
import { useState, useEffect } from 'react';
import '../App.css';

const Fade = ({ text }) => {
  const [fadeProp, setFadeProp] = useState({ fade: 'fade-out' });
  useEffect(() => {
    const timeout = setInterval(() => {
      if (fadeProp.fade === 'fade-out') {
        setFadeProp({
          fade: 'fade-in',
        });
      } else {
        setFadeProp({
          fade: 'fade-out',
        });
      }
    }, 3000);
    return () => clearInterval(timeout);
  }, [fadeProp]);

  return (
    <>
      <h1 className={fadeProp.fade}>{text}</h1>
    </>
  );
};

Fade.defaultProps = {
  text: 'Get Results.',
  time: 3000,
};

export default Fade;
