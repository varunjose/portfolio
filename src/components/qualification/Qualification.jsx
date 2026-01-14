import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './qualification.css';

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

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  
  return (
    <section className='qualification section' id='qualification'>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h2 className='section__title' variants={itemVariants}>
          Qualification
        </motion.h2>
        <motion.span className='section__subtitle' variants={itemVariants}>
          My Educational & Professional Journey
        </motion.span>

        <div className='qualification__container container'>
          <div className='qualification__tabs'>
            <div 
              className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} 
              onClick={() => toggleTab(1)}
            >
              <i className='uil uil-graduation-cap qualification__icon'></i>
              Education
            </div>
            <div 
              className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} 
              onClick={() => toggleTab(2)}
            >
              <i className='uil uil-briefcase qualification__icon'></i>
              Experience
            </div>
          </div>

          <div className='qualification__sections'>
            <div className={toggleState === 1 ? 'qualification__content qualification__content-active' : 'qualification__content'}>
              <div className='qualification__data'>
                <div>
                  <h3 className='qualification__title'>Master of Science in Computer Science</h3>
                  <span className='qualification__subtitle'>University at Albany, SUNY</span>
                  <div className='qualification__calendar'>
                    <i className='uil uil-calendar-alt'></i>
                    2023 - May 2025
                  </div>
                </div>
                <div>
                  <span className='qualification__rounder'></span>
                  <span className='qualification__line'></span>
                </div>
              </div>

              <div className='qualification__data'>
                <div></div>
                <div>
                  <span className='qualification__rounder'></span>
                  <span className='qualification__line'></span>
                </div>
                <div>
                  <h3 className='qualification__title'>Bachelor of Technology in Computer Science</h3>
                  <span className='qualification__subtitle'>Kommuri Pratap Reddy Institute of Technology</span>
                  <div className='qualification__calendar'>
                    <i className='uil uil-calendar-alt'></i>
                    2019 - Jun 2023
                  </div>
                </div>
              </div>
            </div>

            <div className={toggleState === 2 ? 'qualification__content qualification__content-active' : 'qualification__content'}>
              <div className='qualification__data'>
                <div>
                  <h3 className='qualification__title'>Software Engineer Intern</h3>
                  <span className='qualification__subtitle'>Excelerate</span>
                  <div className='qualification__calendar'>
                    <i className='uil uil-calendar-alt'></i>
                    May 2025 - Dec 2025
                  </div>
                </div>
                <div>
                  <span className='qualification__rounder'></span>
                  <span className='qualification__line'></span>
                </div>
              </div>

              <div className='qualification__data'>
                <div></div>
                <div>
                  <span className='qualification__rounder'></span>
                  <span className='qualification__line'></span>
                </div>
                <div>
                  <h3 className='qualification__title'>Programming Analyst Assistant</h3>
                  <span className='qualification__subtitle'>NYS Department of Transportation</span>
                  <div className='qualification__calendar'>
                    <i className='uil uil-calendar-alt'></i>
                    Jun 2024 - May 2025
                  </div>
                </div>
              </div>

              <div className='qualification__data'>
                <div>
                  <h3 className='qualification__title'>Software Engineer Intern</h3>
                  <span className='qualification__subtitle'>Cognier Insights</span>
                  <div className='qualification__calendar'>
                    <i className='uil uil-calendar-alt'></i>
                    Jan 2022 - Jun 2023
                  </div>
                </div>
                <div>
                  <span className='qualification__rounder'></span>
                  <span className='qualification__line'></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Qualification