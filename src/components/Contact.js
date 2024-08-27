// components/Contact.js
import React from 'react';
import 'boxicons';

const Contact = () => {
  return (
    <section className="contact" id='contact'>
      <div className="contact-text">
        <h2>Contact <span>Me</span></h2>
        <h4>Let's work Together</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel diam lectus.</p>
        <div className="contact-list">
<li><a href='amanedesaleng@gmail.com'><i className='bx bx5-send'>amanedesaleng@gmail.com</i></a></li>
<li><a href='https://www.linkedin.com/in/amanuel-desalegn-862220297/'><i className='bx bx5-phone'>0955436917</i></a></li>
</div>
        <div className="contact-icons">
          <a href='https://facebook.com'><i className='bx bxl-facebook'></i></a>
          <a href='https://web.whatsapp.com/Amanuel%20Desalegn'><i className='bx bxl-whatsapp'></i></a>
          <a href='https://www.instagram.com/amanedesaleng?igsh=bXAyamJ5dDg3cTNs'><i className='bx bxl-instagram'></i></a>
          <a href='https://www.linkedin.com/in/amanuel-desalegn-862220297/'><i className='bx bxl-linkedin-square'></i></a>

          </div>   

      </div>
      <div className="contact-form">
        <form action="">
          <input type="text" placeholder="Enter Your name" required></input>
          <input type="email" placeholder="Enter Your email" required></input>
          <input type="" placeholder="Enter Your subject" required></input>
<textarea name="" id="" cols="40" rows="10" placeholder="Enter your Message"></textarea>
<input type="submit" value="submit" className="send"></input>
        </form>

      </div>
    </section>
  );
}

export default Contact;
