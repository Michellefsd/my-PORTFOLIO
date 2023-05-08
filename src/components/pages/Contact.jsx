import '../Button.css';
import './Contact.css';
import {useState } from 'react';
import { isValidPhoneNumber  } from 'libphonenumber-js';
import {HiCheckCircle, HiExclamationCircle} from 'react-icons/hi';
import {GoAlert} from 'react-icons/go';
import Alert from '../Alert';
import Modal from '../Modal';

function Contact() {
  const [nameValue, setNameValue] = useState("");
  const [nameState, setNameState] = useState(null);

  const [emailValue, setEmailValue] = useState("");
  const [emailState, setEmailState] = useState(null);
  const validator = require("email-validator");

  const [phoneValue, setPhoneValue] = useState("");
  const [phoneState, setPhoneState] = useState(null);

  ///////////////////////////////////////
  // usar useEffect xa q renderize al momento
  const [messageValue, setMessageValue] = useState("");
  const [counter, setCounter] = useState(250);

  const [showModal, setShowModal] = useState(false);


  const handleNameChange = (e) => {
    setNameValue(e.target.value);
  };
  const handleMailChange = (e) => {
    setEmailValue(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhoneValue(e.target.value);
  };
  
  const handleMessageChange = (e) => { 
    setMessageValue(e.target.value);
    setCounter(250 - messageValue.length);
  };


  const validInput = 
    <Alert icon={<HiCheckCircle style={{color: 'green', fontSize: '24px'}}/>}> This Looks Good</Alert>;

  const nonValidInput = 
    <Alert icon={<GoAlert style={{color: 'orange', fontSize: '24px'}}/>}> Enter a valid {nameValue}</Alert>;

  const validateFunctions = () => {
    setNameState(nameValue.trim() !== "");
    setEmailState(validator.validate(emailValue));
    setPhoneState(isValidPhoneNumber(phoneValue));
  }
 


  function handleSubmit(e) {
    e.preventDefault();
    if (validateFunctions) {
      setEmailState(null);
      setPhoneState(null);
      setNameState(null);
      setNameValue("");
      setEmailValue("");
      setPhoneValue("");
      setMessageValue("");
      setCounter(250);
      setTimeout(() => {
        setShowModal(false);
      }, 3000);
      setShowModal(true);
    }
  };

 
  return (
    <div className='section--contact__div'>
      <section className='section--contact'>
        <h2 className='section--title'><span className='underlined'></span>Contact</h2>
        <form onSubmit={handleSubmit} className='form'>
          <label htmlFor="name">Name</label>
          <input onChange={handleNameChange || ""} onBlur={validateFunctions} value={nameValue || ""} className='input' id="name" type="text" />
          {nameState == null || (nameState ? validInput : nonValidInput)}

          <label htmlFor="mail">Email</label>
          <input value={emailValue || ""} onChange={handleMailChange || ""} onBlur={validateFunctions} className='input' id="mail" type="email" />
          {emailState == null || (emailState ? validInput : nonValidInput)}

          <label htmlFor="phone">Phone</label>
          <input value={phoneValue || ""} onChange={handlePhoneChange || ""} onBlur={validateFunctions} className='input' id="phone" type="number" />
          {phoneState == null || (phoneState ? validInput : nonValidInput)}
          
          {showModal && <Modal />}

          <label htmlFor="message">Message</label>
          <textarea onChange={handleMessageChange|| ""} onBlur={validateFunctions} value={messageValue || ""} id="message" cols="30" rows="10"></textarea>
          <Alert icon={<HiExclamationCircle style={{color: 'var(--neutral_color--80)', fontSize: '24px'}}/>}> {counter} characters left</Alert>
          <button className='btn--orange btn--big mt'>Send</button>
        </form>
      </section>
    </div>
  )
};


export default Contact;