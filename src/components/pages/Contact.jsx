import '../Button.css';
import './Contact.css';
import {useState, useEffect, useRef, forwardRef } from 'react';
import emailjs from '@emailjs/browser';
import { isValidPhoneNumber  } from 'libphonenumber-js';
import {HiCheckCircle, HiExclamationCircle} from 'react-icons/hi';
import {GoAlert} from 'react-icons/go';
import Alert from '../Alert';
import Modal from '../Modal';

const Contact = forwardRef((props, ref) => {

  const form = useRef();

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
    // the regex is for local numbers the isValidPhoneNumber() fn is for international numbers
    const uruguayPhoneRegex = /^(09|2)\d{7}$|^0\d{7}$/;
    setPhoneState(uruguayPhoneRegex.test(phoneValue) || isValidPhoneNumber(phoneValue));
  }
    const validateFunctions = () => {
    validateName();
    validateEmail();
    validatePhone();
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validateEmail && validateName && validatePhone && messageValue !== "") {
      setEmailState(null);
      setPhoneState(null);
      setNameState(null);
      setNameValue("");
      setEmailValue("");
      setPhoneValue("");
      setMessageValue("");
      setCounter(250);
      emailjs.sendForm('service_7833pqs', 'template_8bgob4n', form.current, 'BRtHHSHjafSHySB1p')
      .then((result) => {
        console.log(result)
        setTimeout(() => {
          setShowModal(0);
        }, 3000);
        setShowModal(1);
      }, (error) => {
          console.log(error.text);
          setTimeout(() => {
            setShowModal(0);
          }, 3000);
          setShowModal(3);
      });
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
        <form  ref={form} onSubmit={handleSubmit} className='form'>
          <label htmlFor="name">Name</label>
          <input onChange={handleNameChange || ""}  name="user_name" onBlur={validateName} value={nameValue || ""} className='input' id="name" type="text" />
          {nameState == null || (nameState ? validInput : nonValidInput)}

          <label htmlFor="mail">Email</label>
          <input value={emailValue || ""} onChange={handleMailChange || ""} name="user_email" onBlur={validateEmail} className='input' id="mail" type="email" />
          {emailState == null || (emailState ? validInput : nonValidInput)}

          <label htmlFor="phone">Phone</label>
          <input value={phoneValue || ""} onChange={handlePhoneChange || ""} name="user_phone" onBlur={validatePhone} className='input' id="phone" type="tel" />
          {phoneState == null || (phoneState ? validInput : nonValidInput)}
          

          <label htmlFor="message">Message</label>
          <textarea onChange={handleMessageChange|| ""} name="message" onBlur={validateFunctions} value={messageValue || ""} id="message" cols="30" rows="10"></textarea>
          <Alert icon={<HiExclamationCircle style={{color: 'var(--neutral_color--80)', fontSize: '24px'}}/>}> {counter} characters left</Alert>
          <button className='btn--orange btn--big mt'>Send</button>
        </form>
      </section>
      {showModal === 1 && <Modal className="success-modal" p1={"Your message has been received."} p2={" Thank you for your time!"} />}
      {showModal === 2 && <Modal className="alert-modal" p1={"Something went wrong"} p2={"Do you add all the information?"} />}
      {showModal === 3 && <Modal className="alert-modal" p1={"Ups! Something went wrong"} p2={"It's us. We are working to fix the problem"} />}
      

    </div>
  )
});


export default Contact;