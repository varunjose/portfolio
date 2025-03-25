import React, { useState } from 'react';
import './qualification.css';


const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
      const toggleTab = (index) => {
          setToggleState(index);
      };
  return (
    <section className='qualification section' id='qualification'>
        <h2 className='section__title'>Qualification</h2>
        <span className='section__subtitle'>My personel journey</span>
      

        <div className='qualification__container container'>
          <div className='qualification__tabs'>
            <div className={ toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
              <i className='uil uil-graduation-cap qualification__icon'></i>
              Education
            </div>
            <div className={ toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
              <i className='uil uil-briefcase qualification__icon'></i>
              Work
            </div>
          </div>

          <div className='qualification__sections'>
            <div className={ toggleState === 1 ? 'qualification__content qualification__content-active' : 'qualification__content'}>
              <div className='qualification__data'>
                <div>
                  <h3 className='qualification__title'>Masters in Computer Science </h3>
                  <span className='qualification__subtitle'>University at Albany, SUNY</span>
                  <div className='qualification__calendar'>
                    <i className='uil uil-calendar-alt'></i>
                    2023 - 2025
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
                  <h3 className='qualification__title'>Bachelors in Computer Science and Engineering</h3>
                  <span className='qualification__subtitle'>Kommuri Pratap Reddy Institute of Technology</span>
                  <div className='qualification__calendar'>
                    <i className='uil uil-calendar-alt'></i>
                    2019 - 2023
                  </div>
                </div>
              </div>
            </div>

            <div className={ toggleState === 2 ? 'qualification__content qualification__content-active' : 'qualification__content'}>
              <div className='qualification__data'>
                <div>
                  <h3 className='qualification__title'>NYS Department of Transportation</h3>
                  <span className='qualification__subtitle'>Data Analyst Intern</span>
                  <div className='qualification__calendar'>
                    <i className='uil uil-calendar-alt'></i>
                    Sep 2024-May 2025
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
                  <h3 className='qualification__title'>Sodexo</h3>
                  <span className='qualification__subtitle'>ITS Student Assistant</span>
                  <div className='qualification__calendar'>
                    <i className='uil uil-calendar-alt'></i>
                    Sep 2023-Jun 2024
                  </div>
                </div>
              </div>


              <div className='qualification__data'>
                <div>
                  <h3 className='qualification__title'>Cognier Insights</h3>
                  <span className='qualification__subtitle'>Software Engineer Intern</span>
                  <div className='qualification__calendar'>
                    <i className='uil uil-calendar-alt'></i>
                    Sep 2024-May 2025
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
    </section>
  )
}

export default Qualification
