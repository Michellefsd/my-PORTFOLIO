import './Button.css';
import './Contact.css';
import {HiCheckCircle, HiExclamationCircle} from 'react-icons/hi';
import {GoAlert} from 'react-icons/go';
import Alert from './Alert';
import {useState} from 'react';

function Contact() {
  const style = {color: 'var(--neutral_color--80)', fontSize: '12px'} 
  const [emailValue, setEmailValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [messageValue, setMessageValue] = useState("");
  const [count, setCount] = useState(250)
  // const [sendAlert, setSendAlert] = useState("");
  const handleMailChange = (e) => {
    setEmailValue=e.target.value
  };
  const handlePhoneChange = (e) => {
    setPhoneValue=e.target.value
  };
  const handleMessageChange = (e) => {
    setCount(250 - messageValue.length); 
    setMessageValue(e.target.value);
  };
  function handleSubmit(e) {
    e.preventDefault();
  };
  return (
    <div className='section--contact__div'>
      <section className='section--contact'>
        <h2 className='section--title'><span className='underlined'></span>Contact</h2>
        <form onSubmit={handleSubmit} className='form'>
          <label htmlFor="name">Name</label>
          <input onChange={handleMessageChange} value="" className='input' id="name" type="text" />
          <Alert icon={<HiCheckCircle />}> This Looks Good </Alert>

          <label htmlFor="mail">Email</label>
          <input value={emailValue || ""} onChange={handleMailChange} className='input' id="mail" type="email" />
          <Alert></Alert>

          <label htmlFor="phone">Phone</label>
          <input value={phoneValue || ""} onChange={handlePhoneChange} className='input' id="phone" type="number" />
          <Alert></Alert>

          <label htmlFor="message">Message</label>
          <textarea onChange={handleMessageChange} value={messageValue || ""} id="message" cols="30" rows="10"></textarea>
          <Alert icon={<HiExclamationCircle style={style}/>} >{count} characters left</Alert>
          <button className='btn--orange btn--big mt'>Send</button>
        </form>
      </section>
    </div>
  );
}

export default Contact;