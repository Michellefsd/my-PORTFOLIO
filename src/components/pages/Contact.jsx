import '../Button.css';
import './Contact.css';
import {HiCheckCircle, HiExclamationCircle} from 'react-icons/hi';
import {GoAlert} from 'react-icons/go';
import Alert from './Alert';
import {useState} from 'react';

function Contact() {
  const style = {color: 'var(--neutral_color--80)', fontSize: '12px'} 
  const [emailValue, setEmailValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");

  ///////////////////////////////////////
  // usar useEffect xa q renderize al momento
  const [messageValue, setMessageValue] = useState("");


  const [state, setState] = useState(null);
  const [children, setChildren] =useState(null)
  const [icon, setIcon] = useState(null);
  const [count, setCount] = useState(250)

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
      <Alert icon={<GoAlert />}> `Enter a valid ${e.id}`</Alert>
    )
  };

  function handleSubmit(e) {
    e.preventDefault();
    if(nameValue !== "" ) {
      setState(true);
      return state && validateInput;
    }
  console.log(e.target);
  };
  return (
    <div className='section--contact__div'>
      <section className='section--contact'>
        <h2 className='section--title'><span className='underlined'></span>Contact</h2>
        <form onSubmit={handleSubmit} className='form'>
          <label htmlFor="name">Name</label>
          <input onChange={handleNameChange || ""} value="" className='input' id="name" type="text" />
          <Alert state={state} icon={icon} style={style}></Alert>

          <label htmlFor="mail">Email</label>
          <input value={emailValue || ""} onChange={handleMailChange || ""} className='input' id="mail" type="email" />
          <Alert state={state} icon={icon} style={style}></Alert>

          <label htmlFor="phone">Phone</label>
          <input value={phoneValue || ""} onChange={handlePhoneChange || ""} className='input' id="phone" type="number" />
          <Alert state={state} icon={icon} style={style}></Alert>

          <label htmlFor="message">Message</label>
          <textarea onChange={handleMessageChange|| ""} value={messageValue || ""} id="message" cols="30" rows="10"></textarea>
          <Alert state={state} icon={icon} style={style}>{count} characters left</Alert>
          <button className='btn--orange btn--big mt'>Send</button>
        </form>
      </section>
    </div>
  );
}

export default Contact;