import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Experience from './components/experience/Experience';
import Qualification from './components/qualification/Qualification';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import Projects from './components/projects/Projects';

const App = () => {
  return (
    <>
      <Header />
      
      <main className='main'>
        <Home />
        <Projects />
        <About />
        <Experience />
        <Skills />
        <Qualification />
        <Contact />
      </main>

      <Footer />
      <ScrollUp />
    </>

    
  );
}

export default App;
