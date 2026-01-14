import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/themeToggle/ThemeToggle';
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

const pageVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const App = () => {
  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
        >
          <ThemeToggle />
          <Header />
          
          {/* Background Gradients */}
          <div className="bg-gradient bg-gradient--1"></div>
          <div className="bg-gradient bg-gradient--2"></div>
          
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
        </motion.div>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;