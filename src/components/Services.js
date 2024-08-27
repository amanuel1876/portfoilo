// components/Services.js
import React from 'react';
const Services = () => {
  return (
    <section className="services" id="services">
      <div className="contanier3">
        <h1 className="sub-title">
          My<span>Services</span>
        </h1>
        <div className="services-list">
          <div>
            <i className=""></i>
            <h3>Web Development</h3>
            <p>
              As a MERN stack web developer, I specialize in building dynamic
              and responsive web applications using MongoDB, Express.js,
              React.js, and Node.js. My services include:
            </p>
            <a href="/about" className="read">
              learn More
            </a>
          </div>

          <div>
            <i className=""></i>
            <h3>Video Editing</h3>
            <p>
              I offer professional video editing services to enhance your video
              content. My video editing services include: Cutting and Trimming:
              Removing unwanted footage and refining video content. Transitions
              and Effects: Adding smooth transitions and creative effects to
              make your videos more engaging.
            </p>
            <a href="/about" className="read">
              learn More
            </a>
          </div>

          <div>
            <i className=""></i>
            <h3>Graphic Designe</h3>
            <p>
              As a graphic designer, I provide creative solutions to bring your
              visual ideas to life. My graphic design services include: Branding
              and Identity: Designing logos, business cards, and other brand
              materials to establish a strong and cohesive brand identity
            </p>
            <a href="/about" className="read">
              learn More
            </a>
          </div>
        </div>
      </div>
      <h1 className="sub-title">
        My<span>Skills</span>
      </h1>
    </section>
  );
}

export default Services;
