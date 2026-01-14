import React from 'react';
import { motion } from 'framer-motion';

const ProjectsItems = ({ item, link }) => {
  return (
    <motion.div
      className='projects__card'
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3, ease: 'easeOut' }
      }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="projects__img-wrapper"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img src={item.image} alt={item.title} className='projects__img' />
        <motion.div 
          className="projects__overlay"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
      
      <div className="projects__content">
        <h3 className='projects__title'>{item.title}</h3>
        <p className='projects__subtitle'>{item.subtitle}</p>
        
        <motion.a
          href={link}
          target='_blank'
          rel='noopener noreferrer'
          className='projects__button'
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
        >
          View Project
          <motion.i
            className='bx bx-right-arrow-alt projects__button-icon'
            whileHover={{ x: 4 }}
          />
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ProjectsItems;