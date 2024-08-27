// components/Services.js
import React from 'react';
const Services = () => {
  return (
    <section className="services" id='services'>
      <div className="contanier3">
           <h1 className="sub-title">My<span>Services</span></h1>
           <div className="services-list">
            <div>
              <i className=""></i>
            <h3>Web Development</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel diam lectus.</p>
          <a href='/about' className="read">learn More</a>
          </div>

          <div>
              <i className=""></i>
            <h3>Video Editing</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel diam lectus.</p>
          <a href='/about' className="read">learn More</a>
          </div>

          <div>
              <i className=""></i>
            <h3>Graphic Designe</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel diam lectus.</p>
          <a href='/about' className="read">learn More</a>
          </div>
        </div>
      </div>
      <h1 className="sub-title">My<span>Skills</span></h1>

    </section>
  );
}

export default Services;
