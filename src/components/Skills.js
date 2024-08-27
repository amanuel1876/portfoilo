// components/Skills.js
import React from 'react';
import 'boxicons';

const Skills = () => {
  return (
    <section className="skills" id='skills'>
 <div className="contanier4">
           <h1 className="heading1">Technical Skills</h1>
           <div className="Technical-bars">
            <div className="bar"><i class='bx bxl-html5'></i>
                <div className="info">
                    <span>HTML</span>
                </div>
                <div className="progress-line html">
                    <span></span>
                </div>
                <div className="bar"><i class='bx bxl-css3'></i>
                <div className="info">
                    <span>CSS</span>
                </div>
                <div className="progress-line css">
                    <span></span>
                </div>
               </div>
               <div className="bar"><i class='bx bxl-javascript'></i>
                <div className="info">
                    <span>Javascript</span>
                </div>
                <div className='progress-line javascript'>
                    <span></span>
                </div>
                </div>
                <div className="bar"><i class='bx bxl-php'></i>
                <div className="info">
                    <span>PHP</span>
                </div>
                <div className="progress-line php">
                    <span></span>

                </div>
                </div>
                <div className="bar"><i class='bx bxl-java'></i>
                <div className="info">
                    <span>JAVA</span>

                </div>
                <div className="progress-line java">
                    <span></span>

                </div>
                </div>
                <div className="bar"><i class='bx bxl-react' ></i>
                <div className="info">
                    <span>React</span>
                </div>
                <div className="progress-line react">
                    <span></span>
                </div>
                </div>

                <div className="bar"><i class='bx bxl-python' ></i>
                <div className="info">
                    <span>Python</span>

                </div>
                <div className="progress-line python">
                    <span></span>
                </div>
                </div>
          </div>
        </div>
      </div>
    
      <div className="contanier4">
<h1 className="heading1">Professional Skills</h1>
<div className="radial-bar">

    <svg x="0px" y="0px" viewBox="0 0 200 200">
        <circle className="progress-bar" cx="100" cy="100" r="80">

        </circle>
        <circle className="path path-1" cx="100" cy="100" r="80">

</circle>
    </svg>
    <div className="Percentage">90%</div>
    <div className="text">Creativity</div>
</div>
<div className="radial-bar">
    <svg x="0px" y="0px" viewBox="0 0 200 200">
        <circle className="progress-bar" cx="100" cy="100" r="80">

        </circle>
        <circle className="path path-2" cx="100" cy="100" r="80">

</circle>
    </svg>
    <div className="Percentage">50%</div>
    <div className="text">Communication</div>
</div>

<div className="radial-bar">
    <svg x="0px" y="0px" viewBox="0 0 200 200">
        <circle className="progress-bar" cx="100" cy="100" r="80">

        </circle>
        <circle className="path path-3" cx="100" cy="100" r="80">

</circle>
    </svg>
    <div className="Percentage">70%</div>
    <div className="text">Problem Solving</div>

</div>
<div className="radial-bar">
    <svg x="0px" y="0px" viewBox="0 0 200 200">
        <circle className="progress-bar" cx="100" cy="100" r="80">

        </circle>
        <circle className="path path-4" cx="100" cy="100" r="80">

</circle>
    </svg>
    <div className="Percentage">90%</div>
    <div className="text">TeamWork</div>

</div>
      </div>
    </section>
  );
}

export default Skills;
