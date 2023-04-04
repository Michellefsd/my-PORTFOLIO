import './Button.css';
import './Contact.css';
import React from 'react';

function Contact() {
  return (
    <div className='section--contact__divdiv'>
      <section className='section--contact'>
        <h2 className='section--title'><span className='underlined'></span>Contact</h2>
        <form className='form'>
          <label htmlFor="">Name</label>
          <input type="text" />

          <label htmlFor="">Email</label>
          <input type="email" />

          <label htmlFor="">Phone</label>
          <input type="number" />

          <label htmlFor="">Message</label>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <button className='btn--orange btn--small'>Send</button>
        </form>
      </section>
    </div>
  );
}

export default Contact;