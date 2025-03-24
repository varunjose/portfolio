import React, { useState } from 'react';
import './projects.css';


const Projects = () => {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);
    };
  return (
    <section className='projects section' id='projects'>
        <h2 className='section__title'>Projects</h2>
        <span className='section__subtitle'>What I did</span>
      
        <div className='projects__container container grid'>
            <div className='projects__content'>
                <div>
                    <i className='uil uil-web-grid projects__icon'></i>
                    <h3 className='projects__title'>NYSDOT</h3>
                    <p className='projects__subtitle'>Full Stack Developer Intern</p>
                </div>

                <span className='projects__button' onClick={() => toggleTab(1)}>View More 
                    <i className='uil uil-arrow-right projects__button-icon'></i>
                </span>

                <div className={toggleState === 1 ? "projects__model active-model" : "projects__model"}>
                    <div className='projects__model-content'>
                        <i onClick={() => toggleTab(0)} className='uil uil-times projects__model-close'></i>

                        <h3 className='projects__model-title'>NYSDOT</h3>
                        <p className='projects__model-description'>Worked at NYSDOT and so on...</p>

                        <ul className='projects__model-services grid'>
                            <li className='projects__model-service'>
                                <i className='uil uil-check-circle projects__model-icon'></i>
                                <p className='projects__model-info'>I developed the user interface.</p>
                            </li>
                            <li className='projects__model-service'>
                                <i className='uil uil-check-circle projects__model-icon'></i>
                                <p className='projects__model-info'>I developed the user interface.</p>
                            </li>
                            <li className='projects__model-service'>
                                <i className='uil uil-check-circle projects__model-icon'></i>
                                <p className='projects__model-info'>I developed the user interface.</p>
                            </li>
                            <li className='projects__model-service'>
                                <i className='uil uil-check-circle projects__model-icon'></i>
                                <p className='projects__model-info'>I developed the user interface.</p>
                            </li>
                            <li className='projects__model-service'>
                                <i className='uil uil-check-circle projects__model-icon'></i>
                                <p className='projects__model-info'>I developed the user interface.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>



            <div className='projects__content'>
                <div>
                    <i className='uil uil-arrow projects__icon'></i>
                    <h3 className='projects__title'>Cognier Insights</h3>
                    <p className='projects__subtitle'>Full Stack Developer Intern</p>
                </div>

                <span onClick={() => toggleTab(2)} className='projects__button'>View More 
                    <i className='uil uil-arrow-right projects__button-icon'></i>
                </span>

                <div className={toggleState === 2 ? "projects__model active-model" : "projects__model"}>
                    <div className='projects__model-content'>
                        <i onClick={() => toggleTab(0)} className='uil uil-times projects__model-close'></i>

                        <h3 className='projects__model-title'>Cognier Insights</h3>
                        <p className='projects__model-description'>Worked at NYSDOT and so on...</p>

                        <ul className='projects__model-services grid'>
                            <li className='projects__model-service'>
                                <i className='uil uil-check-circle projects__model-icon'></i>
                                <p className='projects__model-info'>I developed the user interface.</p>
                            </li>
                            <li className='projects__model-service'>
                                <i className='uil uil-check-circle projects__model-icon'></i>
                                <p className='projects__model-info'>I developed the user interface.</p>
                            </li>
                            <li className='projects__model-service'>
                                <i className='uil uil-check-circle projects__model-icon'></i>
                                <p className='projects__model-info'>I developed the user interface.</p>
                            </li>
                            <li className='projects__model-service'>
                                <i className='uil uil-check-circle projects__model-icon'></i>
                                <p className='projects__model-info'>I developed the user interface.</p>
                            </li>
                            <li className='projects__model-service'>
                                <i className='uil uil-check-circle projects__model-icon'></i>
                                <p className='projects__model-info'>I developed the user interface.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>



            <div className='projects__content'>
                <div>
                    <i className='uil uil-edit projects__icon'></i>
                    <h3 className='projects__title'>Sodexo</h3>
                    <p className='projects__subtitle'>Full Stack Developer Intern</p>
                </div>

                <span onClick={() => toggleTab(3)} className='projects__button'>View More 
                    <i className='uil uil-arrow-right projects__button-icon'></i>
                </span>

                <div className={toggleState === 3 ? "projects__model active-model" : "projects__model"}>
                    <div className='projects__model-content'>
                        <i onClick={() => toggleTab(0)} className='uil uil-times projects__model-close'></i>

                        <h3 className='projects__model-title'>Sodexo</h3>
                        <p className='projects__model-description'>Worked at NYSDOT and so on...</p>

                        <ul className='projects__model-services grid'>
                            <li className='projects__model-service'>
                                <i className='uil uil-check-circle projects__model-icon'></i>
                                <p className='projects__model-info'>I developed the user interface.</p>
                            </li>
                            <li className='projects__model-service'>
                                <i className='uil uil-check-circle projects__model-icon'></i>
                                <p className='projects__model-info'>I developed the user interface.</p>
                            </li>
                            <li className='projects__model-service'>
                                <i className='uil uil-check-circle projects__model-icon'></i>
                                <p className='projects__model-info'>I developed the user interface.</p>
                            </li>
                            <li className='projects__model-service'>
                                <i className='uil uil-check-circle projects__model-icon'></i>
                                <p className='projects__model-info'>I developed the user interface.</p>
                            </li>
                            <li className='projects__model-service'>
                                <i className='uil uil-check-circle projects__model-icon'></i>
                                <p className='projects__model-info'>I developed the user interface.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Projects
