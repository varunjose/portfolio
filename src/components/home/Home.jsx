import React from 'react';
import { motion } from 'framer-motion';
import './home.css';
import Social from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const imageVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const Home = () => {
  return (
    <section className='home section' id='home'>
      <motion.div 
        className='home__container container'
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className='home__content grid'>
          <motion.div variants={itemVariants}>
            <Social />
          </motion.div>

          <motion.div variants={itemVariants}>
            <Data />
          </motion.div>

          <motion.div 
            className='home__img'
            variants={imageVariants}
          ></motion.div>
        </div>
        
        <motion.div variants={itemVariants}>
          <ScrollDown />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;