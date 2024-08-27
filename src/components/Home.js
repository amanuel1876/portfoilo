import React, { useEffect } from 'react';
import Typed from 'typed.js';
import 'boxicons/css/boxicons.min.css'; // Import Boxicons CSS

const Home = () => {
  useEffect(() => {
    new Typed('.text', {
      strings: ["Frontend Developer", "Web Developer", "Video Editor", "Graphic Designer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true
    });
  }, []);

  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hello, it's me,</h3>
        <h1>Amanuel Desalegn,</h1>
        <h3>and I'm a <span className="text"></span></h3>

        <p className="text-lg">I am a passionate 4th-year Software Engineering student
          with a strong interest in web development and software engineering.</p>

        <div className="home-sci">
          <a href='https://facebook.com'><i className='bx bxl-facebook'></i></a>
          <a href='https://www.instagram.com/amanedesaleng?igsh=bXAyamJ5dDg3cTNs'><i className='bx bxl-instagram'></i></a>
          <a href='https://web.whatsapp.com/Amanuel%20Desalegn'><i className='bx bxl-whatsapp'></i></a>
          <a href='https://www.linkedin.com/in/amanuel-desalegn-862220297/'><i className='bx bxl-linkedin-square'></i></a>
        </div>

        {/* Use a valid URL or route for More About Me */}
        <a href='/about' className='btn-box'>More About Me</a>
      </div>
    </section>
  );
}

export default Home;
