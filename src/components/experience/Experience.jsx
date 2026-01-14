import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './experience.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
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

const Experience = () => {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);
    };
  return (
    <section className='experience section' id='experience'>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h2 className='section__title' variants={cardVariants}>
          Experience
        </motion.h2>
        <motion.span className='section__subtitle' variants={cardVariants}>
          My Professional Journey
        </motion.span>
      
        <div className='experience__container container grid'>
            <motion.div className='experience__content' variants={cardVariants}>
                <div>
                    <i className='uil uil-rocket experience__icon'></i>
                    <h3 className='experience__title'>Excelerate</h3>
                    <p className='experience__subtitle'>Software Engineer Intern</p>
                </div>

                <span className='experience__button' onClick={() => toggleTab(1)}>View More 
                    <i className='uil uil-arrow-right experience__button-icon'></i>
                </span>

                <div className={toggleState === 1 ? "experience__model active-model" : "experience__model"}>
                    <div className='experience__model-content'>
                        <i onClick={() => toggleTab(0)} className='uil uil-times experience__model-close'></i>

                        <h3 className='experience__model-title'>Excelerate</h3>
                        <p className='experience__model-description'>Software Engineer Intern | May 2025 - Dec 2025</p>

                        <ul className='experience__model-services grid'>
                            <li className='experience__model-service'>
                                <i className='uil uil-check-circle experience__model-icon'></i>
                                <p className='experience__model-info'>Built AI-powered personalized recommendation system serving 600+ learning resources, increasing course completion rates by 25% through intelligent content matching.</p>
                            </li>
                            <li className='experience__model-service'>
                                <i className='uil uil-check-circle experience__model-icon'></i>
                                <p className='experience__model-info'>Engineered full-stack web application using React frontend and FastAPI microservices with Redis caching, achieving sub-200ms response times.</p>
                            </li>
                            <li className='experience__model-service'>
                                <i className='uil uil-check-circle experience__model-icon'></i>
                                <p className='experience__model-info'>Implemented hybrid recommendation engine combining OpenAI embeddings with collaborative filtering, boosting new user engagement by 35% within first week.</p>
                            </li>
                            <li className='experience__model-service'>
                                <i className='uil uil-check-circle experience__model-icon'></i>
                                <p className='experience__model-info'>Developed skill-gap analysis module and onboarding survey system to capture user preferences, enabling personalized learning paths.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </motion.div>

            <motion.div className='experience__content' variants={cardVariants}>
                <div>
                    <i className='uil uil-subway experience__icon'></i>
                    <h3 className='experience__title'>NYSDOT</h3>
                    <p className='experience__subtitle'>Programming Analyst Assistant</p>
                </div>

                <span className='experience__button' onClick={() => toggleTab(2)}>View More 
                    <i className='uil uil-arrow-right experience__button-icon'></i>
                </span>

                <div className={toggleState === 2 ? "experience__model active-model" : "experience__model"}>
                    <div className='experience__model-content'>
                        <i onClick={() => toggleTab(0)} className='uil uil-times experience__model-close'></i>

                        <h3 className='experience__model-title'>New York State Department of Transportation</h3>
                        <p className='experience__model-description'>Programming Analyst Assistant | Jun 2024 - May 2025</p>

                        <ul className='experience__model-services grid'>
                            <li className='experience__model-service'>
                                <i className='uil uil-check-circle experience__model-icon'></i>
                                <p className='experience__model-info'>Automated data processing workflows using Python and SQL, reducing manual processing time by 75% and enabling real-time dashboard updates for 50+ stakeholders.</p>
                            </li>
                            <li className='experience__model-service'>
                                <i className='uil uil-check-circle experience__model-icon'></i>
                                <p className='experience__model-info'>Built interactive analytics dashboards for cost estimation projects, integrating multiple data sources and implementing data visualization techniques.</p>
                            </li>
                            <li className='experience__model-service'>
                                <i className='uil uil-check-circle experience__model-icon'></i>
                                <p className='experience__model-info'>Optimized database queries achieving 60% faster report generation through strategic indexing and query restructuring.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </motion.div>

            <motion.div className='experience__content' variants={cardVariants}>
                <div>
                    <i className='uil uil-arrow experience__icon'></i>
                    <h3 className='experience__title'>Cognier Insights</h3>
                    <p className='experience__subtitle'>Software Engineer Intern</p>
                </div>

                <span onClick={() => toggleTab(3)} className='experience__button'>View More 
                    <i className='uil uil-arrow-right experience__button-icon'></i>
                </span>

                <div className={toggleState === 3 ? "experience__model active-model" : "experience__model"}>
                    <div className='experience__model-content'>
                        <i onClick={() => toggleTab(0)} className='uil uil-times experience__model-close'></i>

                        <h3 className='experience__model-title'>Cognier Insights</h3>
                        <p className='experience__model-description'>Software Engineer Intern | Jan 2022 - Jun 2023</p>

                        <ul className='experience__model-services grid'>
                            <li className='experience__model-service'>
                                <i className='uil uil-check-circle experience__model-icon'></i>
                                <p className='experience__model-info'>Developed data preprocessing pipelines processing 50K+ customer records, engineering 15+ behavioral features that improved ML model accuracy from 82% to 87%.</p>
                            </li>
                            <li className='experience__model-service'>
                                <i className='uil uil-check-circle experience__model-icon'></i>
                                <p className='experience__model-info'>Contributed to API migration project from ODBC to REST architecture using Spring Boot, implementing Redis caching that reduced data fetch latency by 40%.</p>
                            </li>
                            <li className='experience__model-service'>
                                <i className='uil uil-check-circle experience__model-icon'></i>
                                <p className='experience__model-info'>Designed SQL queries for A/B testing analysis, extracting user engagement metrics across 3 customer cohorts to evaluate recommendation effectiveness.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Experience