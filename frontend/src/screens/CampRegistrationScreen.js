import React from 'react';

const CampRegistrationScreen = () => {
  return (
    <div className='container camp-registration'>
      <h1 className='text-center py-3'>St. Gerard Majella Registration</h1>
      <div className='flex'>
        <a
          href='https://docs.google.com/forms/d/1L8BftwdR_YGL8KYryW-PmP5hkiGws3P8Z7J8qoFlpoo/edit'
          target='blank'
          rel='noreferrer'
          className='campCards'
        >
          <h5 className='text-center'>
            3rd Grade - 5th Grade + 6th Grade (recreational)
          </h5>
        </a>
        <a
          href='https://docs.google.com/forms/d/1QcjUPQ45WMbwI0yZgOko_r88yxSZyGz3CU25uIJT9l8/edit'
          target='blank'
          rel='noreferrer'
          className='campCards'
        >
          <h5 className='text-center'>6th Grade (competetive) - 8th Grade</h5>
        </a>
      </div>
    </div>
  );
};

export default CampRegistrationScreen;
