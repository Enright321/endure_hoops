import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PopupMessage from '../components/PopupMessage';

const HomeScreen = () => {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <>
      <div className='hero'>
        <Container>
          <PopupMessage trigger={buttonPopup} setTrigger={setButtonPopup}>
            <h6>Gallery, store, and more coming soon...</h6>
          </PopupMessage>
          <div className='flex'>
            <Link to='/contact'>
              <div className='hero-card'>
                <div className='col'>
                  <img
                    className='hero-img'
                    src='../images/hero1.JPG'
                    alt='Contact'
                  />
                  <h5 className='text-center py-2'>Contact Me</h5>
                </div>
              </div>
            </Link>
            <a
              href='https://docs.google.com/forms/d/1olwSi6Fj4oi3h7vDLNnDUIpYVjB41cjpllR5xUUh4qk/edit'
              target='_blank'
              rel='noreferrer'
            >
              <div className='hero-card'>
                <div className='col'>
                  <img
                    className='hero-img'
                    src='../images/hero2.jpg'
                    alt='basketball camp'
                  />
                  <h5 className='text-center py-2'>Camp Registration</h5>
                </div>
              </div>
            </a>
            <div className='hero-card' onClick={() => setButtonPopup(true)}>
              <div className='col'>
                <img
                  className='hero-img'
                  src='../images/hero3.jpg'
                  alt='basketball store'
                />
                <h5 className='text-center py-2'>Store</h5>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <section className='testimonial'>
        <Container>
          <h1 className='text-center'>Testimonials</h1>
          <div className='wrapper'>
            <div class='testimonial-cards'>
              <div class='testimonial-card'>
                <img src='../images/blossom.jpg' alt='Jay Blossom' />
                <p>
                  "Matt Enright is one of the hardest working and most
                  determined players I have ever coached. He is a student of the
                  game and he has worked hard to develop a skill-set that very
                  few players have. He has trained with elite trainers and
                  coaches throughout his career. He has a great rapport with
                  young players that allows him to get the absolute most out of
                  those he trains. I highly recommend him for any player that
                  wants to grow their game."
                </p>
                <h4>Jay Blossom</h4>
                <h4>Former Coach of the Webster Groves Statesman</h4>
              </div>
              <div class='testimonial-card'>
                <img src='../images/drew.jpg' alt='Drew Hanlen' />
                <p>
                  "I've watched Matt relentlessly work on his game since he was
                  in elementary school and am excited to see him pour that same
                  energy and effort into the players he works with as a skills
                  coach. Matt has a great understanding of how to get players
                  better and is able to connect with players in a manner that
                  will help them get results."
                </p>
                <h4>Drew Hanlen</h4>
                <h4>NBA Trainer</h4>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default HomeScreen;
