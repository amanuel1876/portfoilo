// components/About.js
import React from 'react';
import logo from './amane.jpg'; // Import your logo image

const About = () => {
  return (
    <section className="about" id='about'>
      <div className="container2">
      <img src={logo} alt="amane" className="" /> 
   </div>
   <div className="about-text">
      <h2>About <span>Me</span></h2>
        <h4>MERN Stack  Developer</h4>
        <p className="text-lg">I am a passionate 5th-year Software Engineering student with <br></br>a strong interest in web development and software engineering.
        I love to solve problems and create innovative solutions using<br></br> the latest technologies.
         My goal is to continually learn and <br></br>grow as a developer and contribute meaningfully to the tech industry.</p>
         <a href="/about" className="btn-box">More About Me</a>
      </div>
      
    </section>
  );
}

export default About;
