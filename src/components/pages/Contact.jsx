import '../Button.css';
import './Contact.css';
import '../underlined.css';
import {useState, useEffect, forwardRef } from 'react';
import { isValidPhoneNumber  } from 'libphonenumber-js';

import {HiCheckCircle, HiExclamationCircle} from 'react-icons/hi';
import {GoAlert} from 'react-icons/go';
import Alert from '../Alert';
import Modal from '../Modal';

const Contact = forwardRef((props, ref) => {
  const [nameValue, setNameValue] = useState("");
  const [nameState, setNameState] = useState(null);

  const [emailValue, setEmailValue] = useState("");
  const [emailState, setEmailState] = useState(null);
  const validator = require("email-validator");

  const [phoneValue, setPhoneValue] = useState("");
  const [phoneState, setPhoneState] = useState(null);


  const [messageValue, setMessageValue] = useState("");
  const [counter, setCounter] = useState(250);

  const [showModal, setShowModal] = useState(0);

  const handleNameChange = (e) => {
    setNameValue(e.target.value);
  };
  const handleMailChange = (e) => {
    setEmailValue(e.target.value);
  };
  const fetchCounter = () => {
    setCounter(250- messageValue.length)
  };
  const handlePhoneChange = (e) => {
    setPhoneValue(e.target.value);
  };
  const handleMessageChange = (e) => { 
    setMessageValue(e.target.value);
    fetchCounter();
  };
  
  useEffect(() => {
    fetchCounter();
  }, [fetchCounter])
  const validInput = 
    <Alert icon={<HiCheckCircle style={{color: 'green', fontSize: '24px'}}/>}> This Looks Good</Alert>;

  const nonValidInput = 
    <Alert icon={<GoAlert style={{color: 'orange', fontSize: '24px'}}/>}>This is not Valid</Alert>;
  
  
 
  const validateName = () => {
    setNameState(nameValue.trim() !== "");
  }
  const validateEmail = () => {
    setEmailState(validator.validate(emailValue));
  }
  const validatePhone = ( )=> {
    setPhoneState(isValidPhoneNumber(phoneValue));
  }
    const validateFunctions = () => {
    validateName();
    validateEmail();
    validatePhone();
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (nameValue !== "" && isValidPhoneNumber(phoneValue) && emailValue !== "" && messageValue !== "") {
      setEmailState(null);
      setPhoneState(null);
      setNameState(null);
      setNameValue("");
      setEmailValue("");
      setPhoneValue("");
      setMessageValue("");
      setCounter(250);
      setTimeout(() => {
        setShowModal(0);
      }, 3000);
      setShowModal(1);
    } else {
      setTimeout(() => {
        setShowModal(0);
      }, 3000);
      setShowModal(2);
    }
  };

 
  return (
    <div id="contact" ref={ref} className='section--contact__div'>
      <section className='section--contact'>
        <h2 className='section--title'><span className='underlined'></span>Contact</h2>
        <form onSubmit={handleSubmit} className='form'>
          <label htmlFor="name">Name</label>
          <input onChange={handleNameChange || ""} onBlur={validateName} value={nameValue || ""} className='input' id="name" type="text" />
          {nameState == null || (nameState ? validInput : nonValidInput)}

          <label htmlFor="mail">Email</label>
          <input value={emailValue || ""} onChange={handleMailChange || ""} onBlur={validateEmail} className='input' id="mail" type="email" />
          {emailState == null || (emailState ? validInput : nonValidInput)}

          <label htmlFor="phone">Phone</label>
          <input value={phoneValue || ""} onChange={handlePhoneChange || ""} onBlur={validatePhone} className='input' id="phone" type="tel" />
          {phoneState == null || (phoneState ? validInput : nonValidInput)}
          

          <label htmlFor="message">Message</label>
          <textarea onChange={handleMessageChange|| ""} onBlur={validateFunctions} value={messageValue || ""} id="message" cols="30" rows="10"></textarea>
          <Alert icon={<HiExclamationCircle style={{color: 'var(--neutral_color--80)', fontSize: '24px'}}/>}> {counter} characters left</Alert>
          <button className='btn--orange btn--big mt'>Send</button>
        </form>
      </section>
      {showModal === 1 && <Modal className="success-modal" p1={"Your message has been received."} p2={" Thank you for your time!"} />}
      {showModal === 2 && <Modal className="alert-modal" p1={"Something went wrong"} p2={"Do you add all the information?"} />}
      

    </div>
  )
});


export default Contact;