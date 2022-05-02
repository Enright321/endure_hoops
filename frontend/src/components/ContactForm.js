import React, { useRef } from 'react';
import dotenv from 'dotenv';
import emailjs from 'emailjs-com';
dotenv.config();

const ContactForm = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.SERVICE_ID,
        'template_1gk0e94',
        e.target,
        '72DZt9ByekTv-E45Z'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <section id='contact-form' class='contact-form'>
      <div className='container'>
        <div className='container' style={{ marginTop: '50px' }}>
          <h2 style={{ marginTop: '25px' }} className='text-center py-3'>
            Send Me a Message!
          </h2>
          <form onSubmit={sendEmail} className='row'>
            <label>Name</label>
            <input
              type='text'
              name='name'
              className='form-control'
              style={{ marginBottom: '10px' }}
            />
            <label>Email</label>
            <input
              style={{ marginBottom: '10px' }}
              type='text'
              name='email'
              className='form-control'
            />
            <label>Message</label>
            <textarea
              rows='4'
              className='form-control'
              name='message'
            ></textarea>

            <input
              type='submit'
              value='Send'
              className='form-control btn'
              style={{ margin: '30px 0' }}
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
