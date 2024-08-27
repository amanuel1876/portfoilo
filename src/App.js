// App.js

import React from 'react';
import './styles.css'; // Import Tailwind CSS styles
//import 'boxicons/css/boxicons.min.css';

import Skills from './components/Skills';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-100">
      <Header />
      <Home/>
      <About />
      <Services />
      <Skills/>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
