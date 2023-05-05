import '../Button.css';
import './Contact.css';
import {useState} from 'react';
import parsePhoneNumber from 'libphonenumber-js';
import {HiCheckCircle, HiExclamationCircle} from 'react-icons/hi';
import {GoAlert} from 'react-icons/go';
import Alert from './Alert';

function Contact() {
  const style = {color: 'var(--neutral_color--80)', fontSize: '12px'} 
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
  const [count, setCount] = useState(250)


  const [children, setChildren] =useState(null)
  const [icon, setIcon] = useState(null);

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
    setCount(250 - messageValue.length); 
    setMessageValue(e.target.value);
  };

  const validateInput = () => {
    return (
      <Alert icon={<HiCheckCircle />}> This Looks Good</Alert>
    )
  };
  const nonValidateInput = (e) => {
    return (
      <Alert icon={<GoAlert />}> `Enter a valid ${e.target.id}`</Alert>
    )
  };
  const validateFunctions = (e) => {
    if(nameValue !== "" ) {
      setNameState(true);
      return validateInput;
    }
    if(validator.validate(emailValue)){
      setEmailState(true);
      return validateInput;
    }else {
      setEmailState(false);
      return nonValidateInput;
    }
    if(parsePhoneNumber(phoneValue)){
      setPhoneState(true);
      return validateInput;
    }else {
      setPhoneState(false);
      return nonValidateInput;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    
  };
  return (
    <div className='section--contact__div'>
      <section className='section--contact'>
        <h2 className='section--title'><span className='underlined'></span>Contact</h2>
        <form onSubmit={handleSubmit} className='form'>
          <label htmlFor="name">Name</label>
          <input onChange={handleNameChange || ""} onBlur={validateFunctions} value={nameValue || ""} className='input' id="name" type="text" />
          <Alert state={nameState} icon={icon} style={style}></Alert>

          <label htmlFor="mail">Email</label>
          <input value={emailValue || ""} onChange={handleMailChange || ""} onBlur={validateFunctions} className='input' id="mail" type="email" />
          <Alert state={emailState} icon={icon} style={style}></Alert>

          <label htmlFor="phone">Phone</label>
          <input value={phoneValue || ""} onChange={handlePhoneChange || ""} className='input' id="phone" type="number" />
          <Alert state={phoneState} icon={icon} style={style}></Alert>

          <label htmlFor="message">Message</label>
          <textarea onChange={handleMessageChange|| ""} value={messageValue || ""} id="message" cols="30" rows="10"></textarea>
          <Alert icon={icon} style={style}>{count} characters left</Alert>
          <button className='btn--orange btn--big mt'>Send</button>
        </form>
      </section>
    </div>
  );
}

export default Contact;