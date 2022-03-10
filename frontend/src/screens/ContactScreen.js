import React from 'react';
import { Container } from 'react-bootstrap';

const ContactScreen = () => {
  return (
    <Container>
      <h1 className='py-3'>Contact Me!</h1>
      <div className='contact-card'>
        <div className='col'>
          <div className='row'>
            <div className='card'>
              <div className='card-contents'>
                <h2 className='text-center'>Cell Phone</h2>
                <h6 className='text-center'>314-393-9424</h6>
              </div>
            </div>
            <div className='card'>
              <div className='card-contents'>
                <h2 className='text-center'>Email</h2>
                <h6 className='text-center'>matt3enright@gmail.com</h6>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='card'>
              <div className='card-contents'>
                <h2 className='text-center'>Instagram</h2>
                <a
                  style={{ marginTop: '1rem' }}
                  className='btn'
                  href='https://www.instagram.com/EndureHoops/'
                  target='_blank'
                  rel='noreferrer'
                >
                  VISIT INSTAGRAM
                </a>
              </div>
            </div>
            <div className='card'>
              <div className='card-contents'>
                <h2 className='text-center'>Twitter</h2>
                <a
                  style={{ marginTop: '1rem' }}
                  className='btn'
                  href='https://twitter.com/EndureHoops'
                  target='_blank'
                  rel='noreferrer'
                >
                  VISIT TWITTER
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContactScreen;
