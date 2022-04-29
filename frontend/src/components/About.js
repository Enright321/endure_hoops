import React from 'react';

const About = () => {
  return (
    <section id='about' className='about'>
      <div className='container'>
        <div className='about-image'>
          <img src='./images/about.JPG' alt='Matt Enright' />
        </div>
        <div className='about-text'>
          <p>
            Welcome to Endure Hoops! My goal is to train athletes to perform at
            a high level. I've held training sessions in my driveway since I was
            a sophomore in highschool. I knew from that point forward I wanted
            to turn this passion into a full time career. I have learned from
            and worked with some of the top trainers in the country, and I will
            do whatever it takes to make a positive impact in the basketball
            community.
          </p>
          <p>
            <strong>Matt Enright</strong>
          </p>
          <p>Founder of Endure Hoops</p>
        </div>
      </div>
    </section>
  );
};

export default About;
