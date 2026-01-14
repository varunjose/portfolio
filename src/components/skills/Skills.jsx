import React from 'react';
import { motion } from 'framer-motion';
import './skills.css';
import Frontend from './Frontend';
import Backend from './Backend';
import AIandML from './AIandML';
import DatabaseCloud from './DatabaseCloud';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const Skills = () => {
  return (
    <section className='skills section' id='skills'>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h2 className='section__title' variants={itemVariants}>
          Skills
        </motion.h2>
        <motion.span className='section__subtitle' variants={itemVariants}>
          My Technical Stack
        </motion.span>

        <div className='skills__container container grid'>
          <motion.div variants={itemVariants}>
            <Frontend />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Backend />
          </motion.div>
          <motion.div variants={itemVariants}>
            <AIandML />
          </motion.div>
          <motion.div variants={itemVariants}>
            <DatabaseCloud />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Skills