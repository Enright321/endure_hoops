import React from 'react';

const Testimonials = () => {
  return (
    <section id='testimonial' className='testimonial'>
      <div className='container'>
        <h2 className='fs-500 text-center'>What The Experts are Saying</h2>
        <div className='grid-container'>
          <div className='testimonial-card testimonial-card-1 flex'>
            <img src='../images/blossom.jpg' alt='Jay Blossom' />
            <p>
              "Matt Enright is one of the hardest working and most determined
              players I have ever coached. He is a student of the game and he
              has worked hard to develop a skill-set that very few players have.
              He has trained with elite trainers and coaches throughout his
              career. He has a great rapport with young players that allows him
              to get the absolute most out of those he trains. I highly
              recommend him for any player that wants to grow their game."
            </p>
            <h4>- Jay Blossom</h4>
            <h4>Former Coach of the Webster Groves Statesmen</h4>
          </div>
          <div className='testimonial-card testimonial-card-2 flex'>
            <img src='../images/drew.jpg' alt='Drew Hanlen' />
            <p>
              "I've watched Matt relentlessly work on his game since he was in
              elementary school and am excited to see him pour that same energy
              and effort into the players he works with as a skills coach. Matt
              has a great understanding of how to get players better and is able
              to connect with players in a manner that will help them get
              results."
            </p>
            <h4>- Drew Hanlen</h4>
            <h4>NBA Trainer</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
