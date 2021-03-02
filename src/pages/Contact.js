import React from 'react';
import About from '../components/About';
import Golf from "../assets/images/email.png";
import Github from "../assets/images/github.jpg";
import Linkedin from "../assets/images/Linkedin.png";


function Contact(props) {
    
    return (
        <div>
          <About title={props.title} />
    
          <img className="contact-img" src={Golf} alt="Me" />
          <p className="p-tag">Email:Coates.logan1125@gmail.com</p>
          <img className="github-img" src={Github} alt="Me" />
          <p className="p-tag"><a href="https://github.com/coatsey"> Github</a></p>
          <img className="linkedin-img" src={Linkedin} alt="Me" />
          <p className="p-tag"><a href="https://www.linkedin.com/in/logan-coates-b404b61bb/"> Linkedin</a></p>
        </div>
      );
    }

export default Contact;