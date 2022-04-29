import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm('gmail', 'template_1gk0e94', e.target, '72DZt9ByekTv-E45Z')
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
      <div
        className='container border'
        style={{ marginTop: '50px', width: '50%' }}
      >
        <h2 style={{ marginTop: '25px' }} className='text-center py-3'>
          Contact
        </h2>
        <form
          onSubmit={sendEmail}
          className='row'
          style={{ margin: '25px 85px 75px 100px' }}
        >
          <label>Name</label>
          <input type='text' name='name' className='form-control' />
          <label>Email</label>
          <input type='text' name='email' className='form-control' />
          <label>Message</label>
          <textarea rows='4' className='form-control' name='message'></textarea>
          <input
            type='submit'
            value='Send'
            className='form-control btn btn-dark'
            style={{ marginTop: '30px' }}
          />
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
