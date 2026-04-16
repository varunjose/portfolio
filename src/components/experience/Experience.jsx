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
              <p className='experience__subtitle'>Software Engineer</p>
            </div>

            <span className='experience__button' onClick={() => toggleTab(1)}>View More
              <i className='uil uil-arrow-right experience__button-icon'></i>
            </span>

            <div className={toggleState === 1 ? 'experience__model active-model' : 'experience__model'}>
              <div className='experience__model-content'>
                <i onClick={() => toggleTab(0)} className='uil uil-times experience__model-close'></i>

                <h3 className='experience__model-title'>Excelerate</h3>
                <p className='experience__model-description'>Software Engineer | May 2024 - Dec 2025</p>

                <ul className='experience__model-services grid'>
                  <li className='experience__model-service'>
                    <i className='uil uil-check-circle experience__model-icon'></i>
                    <p className='experience__model-info'>Designed automation tools for AI pipeline orchestration, reducing manual intervention across model execution, monitoring, and deployment workflows supporting 10K+ daily interactions.</p>
                  </li>
                  <li className='experience__model-service'>
                    <i className='uil uil-check-circle experience__model-icon'></i>
                    <p className='experience__model-info'>Built observability systems for latency, throughput, error rates, and service health, enabling faster debugging and more reliable optimization of production AI workloads.</p>
                  </li>
                  <li className='experience__model-service'>
                    <i className='uil uil-check-circle experience__model-icon'></i>
                    <p className='experience__model-info'>Developed scalable Python and FastAPI backend services with asyncio-based parallel processing, improving throughput and sustaining high-availability traffic patterns.</p>
                  </li>
                  <li className='experience__model-service'>
                    <i className='uil uil-check-circle experience__model-icon'></i>
                    <p className='experience__model-info'>Containerized services with Docker and shipped them through GitHub Actions CI/CD; reduced ML model validation cycle time by 40% using Redis caching and repeatable deployment workflows.</p>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div className='experience__content' variants={cardVariants}>
            <div>
              <i className='uil uil-subway experience__icon'></i>
              <h3 className='experience__title'>NYSDOT</h3>
              <p className='experience__subtitle'>Python Developer</p>
            </div>

            <span className='experience__button' onClick={() => toggleTab(2)}>View More
              <i className='uil uil-arrow-right experience__button-icon'></i>
            </span>

            <div className={toggleState === 2 ? 'experience__model active-model' : 'experience__model'}>
              <div className='experience__model-content'>
                <i onClick={() => toggleTab(0)} className='uil uil-times experience__model-close'></i>

                <h3 className='experience__model-title'>New York State Department of Transportation</h3>
                <p className='experience__model-description'>Python Developer | Jun 2023 - May 2024</p>

                <ul className='experience__model-services grid'>
                  <li className='experience__model-service'>
                    <i className='uil uil-check-circle experience__model-icon'></i>
                    <p className='experience__model-info'>Built and maintained data infrastructure pipelines for 50+ large-scale construction datasets, improving fault tolerance and reducing batch processing time by 75%.</p>
                  </li>
                  <li className='experience__model-service'>
                    <i className='uil uil-check-circle experience__model-icon'></i>
                    <p className='experience__model-info'>Automated ingestion, validation, and transformation workflows in Python, eliminating manual processing across 50+ stakeholder-facing workflows.</p>
                  </li>
                  <li className='experience__model-service'>
                    <i className='uil uil-check-circle experience__model-icon'></i>
                    <p className='experience__model-info'>Refactored SQL and multiprocessing workflows to cut query execution from 45 minutes to under 10, while improving ETL monitoring, anomaly detection, and data reliability.</p>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div className='experience__content' variants={cardVariants}>
            <div>
              <i className='uil uil-arrow experience__icon'></i>
              <h3 className='experience__title'>Cognier Insights</h3>
              <p className='experience__subtitle'>ML Engineer</p>
            </div>

            <span onClick={() => toggleTab(3)} className='experience__button'>View More
              <i className='uil uil-arrow-right experience__button-icon'></i>
            </span>

            <div className={toggleState === 3 ? 'experience__model active-model' : 'experience__model'}>
              <div className='experience__model-content'>
                <i onClick={() => toggleTab(0)} className='uil uil-times experience__model-close'></i>

                <h3 className='experience__model-title'>Cognier Insights</h3>
                <p className='experience__model-description'>ML Engineer | May 2020 - Mar 2022</p>

                <ul className='experience__model-services grid'>
                  <li className='experience__model-service'>
                    <i className='uil uil-check-circle experience__model-icon'></i>
                    <p className='experience__model-info'>Built scalable ML inference systems for an e-commerce platform serving 50K+ users, improving model accuracy from 82% to 87% while cutting inference latency by 40%.</p>
                  </li>
                  <li className='experience__model-service'>
                    <i className='uil uil-check-circle experience__model-icon'></i>
                    <p className='experience__model-info'>Designed automated experimentation and evaluation pipelines with MLflow, tracking 100+ runs and reducing model selection time by 60%.</p>
                  </li>
                  <li className='experience__model-service'>
                    <i className='uil uil-check-circle experience__model-icon'></i>
                    <p className='experience__model-info'>Implemented Redis caching and structured production logging to improve response times, stabilize deployments, and reduce redundant computation across ML workflows.</p>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
