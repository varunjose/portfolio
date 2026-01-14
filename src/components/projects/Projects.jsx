import React from 'react';
import { motion } from 'framer-motion';
import './projects.css';
import Project from './Project';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const Projects = () => {
  return (
    <section className='projects section' id='projects'>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h2 className='section__title' variants={itemVariants}>
          Projects
        </motion.h2>
        <motion.span className='section__subtitle' variants={itemVariants}>
          My Work
        </motion.span>

        <motion.div variants={itemVariants}>
          <Project />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;