import './AboutMe.css';
import img1 from'../../img/aws.jpg';
import img2 from'../../img/ibma.jpg';
import img3 from'../../img/studies3.jpg';
import { forwardRef } from 'react';
import image from'../../img/cv.jpg';
import Studies from './Studies';
import { IconContext } from 'react-icons';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { IoMdMail } from 'react-icons/io';

const AboutMe = forwardRef((props, ref ) => {
  return (
    <div>
      <section id="aboutMe" ref={ref} className='section'>
        <h2 className='section--title'><span className='underlined'></span>About Me</h2>
        <div className='section--presentation'>
          <div className='img__div'>
            <img className='img' src={image} alt="My Face"></img>
          </div>
          <p>I am a Front End Developer living in Montevideo, Uruguay.
            I love Learning and I desire to become a Full Stack Developer.
            Besides Programming I'm interested on Maths, Arts, Music,
            Architecture and Aeronautics. 
          </p>
        </div>
        <div className='margin'>
          <IconContext.Provider value={{ size:"42px" }}>  
            <a className='link-profile' href="https://github.com/Michellefsd" target="blank" rel="noopener noreferrer"><AiFillGithub /></a>
            <a className='link-profile' href="https://www.linkedin.com/in/michelle-rodr%C3%ADguez-326972239/" target="blank" rel="noopener noreferrer"><AiFillLinkedin /></a>
            <a className='link-profile' href="mailto:promichfsd@gmail.com?subject=Hey Michelle, I visited your WebSite&body=hello" title="Mail" rel="noopener noreferrer" target="blank"><IoMdMail /></a>
          </IconContext.Provider>  
        </div>
        <div className='studies'>
          <h3>Studies</h3>
          <div className='div-card'>
            <div>
              <Studies where={"AWS"} when={"July 2023"} imagen={img1} what={"AWS Cloud-Practitioner"}/>
            </div>
            <div>
              <Studies where={"IBM"} when={"June 2023"} imagen={img2} what={"Python for Data Science"} />
            </div>
            <div>
              <Studies where={"Udemy"} when={"March 2023"} imagen={img3} what={"React"} />
            </div>
            <div>
              <Studies where={"Udemy"} when={"Nov 2022"} imagen={img3} what={"Web Development"} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

export default AboutMe;