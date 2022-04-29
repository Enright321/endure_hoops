import React from 'react';

const Sponsors = () => {
  return (
    <section id='sponsors' className='sponsors'>
      <div className='container'>
        <div className='flex'>
          <img
            className='logo-sponsor'
            src='/images/sponsor1.png'
            alt='carlton sponsor'
          />
          <img
            className='logo-sponsor'
            src='/images/sponsor2.png'
            alt='llewelyns sponsor'
          />
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
