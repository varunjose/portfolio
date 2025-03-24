import React, { useState } from 'react';
import './experience.css';


const Experience = () => {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);
    };
  return (
    <section className='experience section' id='experience'>
        <h2 className='section__title'>Experience</h2>
        <span className='section__subtitle'>What I did</span>
      
        <div className='experience__container container grid'>
            <div className='experience__content'>
                <div>
                    <i className='uil uil-web-grid experience__icon'></i>
                    <h3 className='experience__title'>NYSDOT</h3>
                    <p className='experience__subtitle'>Full Stack Developer Intern</p>
                </div>

                <span className='experience__button' onClick={() => toggleTab(1)}>View More 
                    <i className='uil uil-arrow-right experience__button-icon'></i>
                </span>

                <div className={toggleState === 1 ? "experience__model active-model" : "experience__model"}>
                    <div className='experience__model-content'>
                        <i onClick={() => toggleTab(0)} className='uil uil-times experience__model-close'></i>

                        <h3 className='experience__model-title'>NYSDOT</h3>
                        <p className='experience__model-description'>Worked at NYSDOT and so on...</p>

                        <ul className='experience__model-services grid'>
                            <li className='experience__model-service'>
                                <i className='uil uil-check-circle experience__model-icon'></i>
                                <p className='experience__model-info'>I developed the user interface.</p>
                            </li>
                            <li className='experience__model-service'>
                                <i className='uil uil-check-circle experience__model-icon'></i>
                                <p className='experience__model-info'>I developed the user interface.</p>
                            </li>
                            <li className='experience__model-service'>
                                <i className='uil uil-check-circle experience__model-icon'></i>
                                <p className='experience__model-info'>I developed the user interface.</p>
                            </li>
                            <li className='experience__model-service'>
                                <i className='uil uil-check-circle experience__model-icon'></i>
                                <p className='experience__model-info'>I developed the user interface.</p>
                            </li>
                            <li className='experience__model-service'>
                                <i className='uil uil-check-circle experience__model-icon'></i>
                                <p className='experience__model-info'>I developed the user interface.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>



            <div className='experience__content'>
                <div>
                    <i className='uil uil-arrow experience__icon'></i>
                    <h3 className='experience__title'>Cognier Insights</h3>
                    <p className='experience__subtitle'>Full Stack Developer Intern</p>
                </div>

                <span onClick={() => toggleTab(2)} className='experience__button'>View More 
                    <i className='uil uil-arrow-right experience__button-icon'></i>
                </span>

                <div className={toggleState === 2 ? "experience__model active-model" : "experience__model"}>
                    <div className='experience__model-content'>
                        <i onClick={() => toggleTab(0)} className='uil uil-times experience__model-close'></i>

                        <h3 className='experience__model-title'>Cognier Insights</h3>
                        <p className='experience__model-description'>Worked at NYSDOT and so on...</p>

                        <ul className='experience__model-services grid'>
                            <li className='experience__model-service'>
                                <i className='uil uil-check-circle experience__model-icon'></i>
                                <p className='experience__model-info'>I developed the user interface.</p>
                            </li>
                            <li className='experience__model-service'>
                                <i className='uil uil-check-circle experience__model-icon'></i>
                                <p className='experience__model-info'>I developed the user interface.</p>
                            </li>
                            <li className='experience__model-service'>
                                <i className='uil uil-check-circle experience__model-icon'></i>
                                <p className='experience__model-info'>I developed the user interface.</p>
                            </li>
                            <li className='experience__model-service'>
                                <i className='uil uil-check-circle experience__model-icon'></i>
                                <p className='experience__model-info'>I developed the user interface.</p>
                            </li>
                            <li className='experience__model-service'>
                                <i className='uil uil-check-circle experience__model-icon'></i>
                                <p className='experience__model-info'>I developed the user interface.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>



            <div className='experience__content'>
                <div>
                    <i className='uil uil-edit experience__icon'></i>
                    <h3 className='experience__title'>Sodexo</h3>
                    <p className='experience__subtitle'>Full Stack Developer Intern</p>
                </div>

                <span onClick={() => toggleTab(3)} className='experience__button'>View More 
                    <i className='uil uil-arrow-right experience__button-icon'></i>
                </span>

                <div className={toggleState === 3 ? "experience__model active-model" : "experience__model"}>
                    <div className='experience__model-content'>
                        <i onClick={() => toggleTab(0)} className='uil uil-times experience__model-close'></i>

                        <h3 className='experience__model-title'>Sodexo</h3>
                        <p className='experience__model-description'>Worked at NYSDOT and so on...</p>

                        <ul className='experience__model-services grid'>
                            <li className='experience__model-service'>
                                <i className='uil uil-check-circle experience__model-icon'></i>
                                <p className='experience__model-info'>I developed the user interface.</p>
                            </li>
                            <li className='experience__model-service'>
                                <i className='uil uil-check-circle experience__model-icon'></i>
                                <p className='experience__model-info'>I developed the user interface.</p>
                            </li>
                            <li className='experience__model-service'>
                                <i className='uil uil-check-circle experience__model-icon'></i>
                                <p className='experience__model-info'>I developed the user interface.</p>
                            </li>
                            <li className='experience__model-service'>
                                <i className='uil uil-check-circle experience__model-icon'></i>
                                <p className='experience__model-info'>I developed the user interface.</p>
                            </li>
                            <li className='experience__model-service'>
                                <i className='uil uil-check-circle experience__model-icon'></i>
                                <p className='experience__model-info'>I developed the user interface.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Experience
