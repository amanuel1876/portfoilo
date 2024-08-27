// components/Projects.js
import React from 'react';
import grapic from './grapic.jpg'; // Import your logo image
import vide01 from './vide01.jpg'; 
import web from './web.jpg'; 

const Projects = () => {
  return (
    <section>
      <div className="portfolio" id ="project">
          <div className="main-text" id="project">
          <h2>latest<span>Projects</span></h2>

      <div className="portfolio-content">
        <div className="row">
        <img src={web} alt="web" className="" /> {/* Use your logo image */}
          <div className="layer">
            <h5>Web Developement</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel diam lectus.</p>
          </div>

  </div>
  <div className="row">
  <img src={vide01} alt="vide01" className="" /> {/* Use your logo image */}
          <div className="layer">
            <h5>Video Editor</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel diam lectus.</p>
          </div>

  </div>
  <div className="row">
  <img src={grapic} alt="grapic" className="" /> {/* Use your logo image */}
          <div className="layer">
            <h5>Graphic Desinger</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel diam lectus.</p>
          </div>

  </div>
 
</div>
</div>
</div>   
    </section>
  );
}

export default Projects;
