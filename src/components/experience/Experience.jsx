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
                    <i className='uil uil-subway experience__icon'></i>
                    <h3 className='experience__title'>NYSDOT</h3>
                    <p className='experience__subtitle'>Data Analyst</p>
                </div>

                <span className='experience__button' onClick={() => toggleTab(1)}>View More 
                    <i className='uil uil-arrow-right experience__button-icon'></i>
                </span>

                <div className={toggleState === 1 ? "experience__model active-model" : "experience__model"}>
                    <div className='experience__model-content'>
                        <i onClick={() => toggleTab(0)} className='uil uil-times experience__model-close'></i>

                        <h3 className='experience__model-title'>New York State Department of Transportation</h3>
                        <p className='experience__model-description'>Worked at NYSDOT as data analyst intern.</p>

                        <ul className='experience__model-services grid'>
                            <li className='experience__model-service'>
                                <i className='uil uil-check-circle experience__model-icon'></i>
                                <p className='experience__model-info'>Optimized data management using Python for data manipulation and analysis, and SQL for precise querying, resulting
                                    in a 70% increase in report generation efficiency. </p>
                            </li>
                            <li className='experience__model-service'>
                                <i className='uil uil-check-circle experience__model-icon'></i>
                                <p className='experience__model-info'>Streamlined reporting processes using Python libraries and SAP Crystal Reports, cutting report generation time by 6
                                hours weekly and enabling faster decision-making across the pre-construction team.</p>
                            </li>
                            <li className='experience__model-service'>
                                <i className='uil uil-check-circle experience__model-icon'></i>
                                <p className='experience__model-info'>Spearheaded the creation of interactive Tableau dashboards, connecting diverse datasets from SQL databases and
                                Python scripts, enabling pre-construction team to cut decision-making time by 3 hours per week. </p>
                            </li>
                            <li className='experience__model-service'>
                                <i className='uil uil-check-circle experience__model-icon'></i>
                                <p className='experience__model-info'>Played a key role in resolving data integrity issues within the Project PreConstruction database, conducting thorough
                                data analysis and validation that led to timely fixes and improved report accuracy. </p>
                            </li>
                            <li className='experience__model-service'>
                                <i className='uil uil-check-circle experience__model-icon'></i>
                                <p className='experience__model-info'> Reduced manual tasks by 30% and increased work efficiency.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>



            <div className='experience__content'>
                <div>
                    <i className='uil uil-arrow experience__icon'></i>
                    <h3 className='experience__title'>Cognier Insights</h3>
                    <p className='experience__subtitle'>Software Engineer Intern</p>
                </div>

                <span onClick={() => toggleTab(2)} className='experience__button'>View More 
                    <i className='uil uil-arrow-right experience__button-icon'></i>
                </span>

                <div className={toggleState === 2 ? "experience__model active-model" : "experience__model"}>
                    <div className='experience__model-content'>
                        <i onClick={() => toggleTab(0)} className='uil uil-times experience__model-close'></i>

                        <h3 className='experience__model-title'>Cognier Insights</h3>
                        <p className='experience__model-description'>Worked at Cognier Insights as a Software Engineer Intern</p>

                        <ul className='experience__model-services grid'>
                            <li className='experience__model-service'>
                                <i className='uil uil-check-circle experience__model-icon'></i>
                                <p className='experience__model-info'>Received an extensive 4-month training program encompassing React.js, Github, Agile foundations, C++, C#(.NET), 
                                    and MS SQL.</p>
                            </li>
                            <li className='experience__model-service'>
                                <i className='uil uil-check-circle experience__model-icon'></i>
                                <p className='experience__model-info'>Developed a retail application that allowed consumers to access real-time stock availability and product placements
                                    within aisles.</p>
                            </li>
                            <li className='experience__model-service'>
                                <i className='uil uil-check-circle experience__model-icon'></i>
                                <p className='experience__model-info'>Resulting in a 30% increase in customer satisfaction through enhanced shopping experiences and a 25%
                                reduction in checkout processing time.</p>
                            </li>
                            <li className='experience__model-service'>
                                <i className='uil uil-check-circle experience__model-icon'></i>
                                <p className='experience__model-info'>Optimized application performance by systematically identifying and addressing bottlenecks, eliminated dependency on
                                    cloud gateways by establishing direct connections between the user interface and server using REST API protocols.</p>
                            </li>
                            <li className='experience__model-service'>
                                <i className='uil uil-check-circle experience__model-icon'></i>
                                <p className='experience__model-info'>Leading to improved system reliability and a 20% reduction in latency.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>



            <div className='experience__content'>
                <div>
                    <i className='uil uil-analysis experience__icon'></i>
                    <h3 className='experience__title'>Sodexo</h3>
                    <p className='experience__subtitle'>ITS Student Assistant</p>
                </div>

                <span onClick={() => toggleTab(3)} className='experience__button'>View More 
                    <i className='uil uil-arrow-right experience__button-icon'></i>
                </span>

                <div className={toggleState === 3 ? "experience__model active-model" : "experience__model"}>
                    <div className='experience__model-content'>
                        <i onClick={() => toggleTab(0)} className='uil uil-times experience__model-close'></i>

                        <h3 className='experience__model-title'>Sodexo</h3>
                        <p className='experience__model-description'>ITS Student Assistant</p>

                        <ul className='experience__model-services grid'>
                            <li className='experience__model-service'>
                                <i className='uil uil-check-circle experience__model-icon'></i>
                                <p className='experience__model-info'>I supported day-to-day technical operations by assisting with 
                                    hardware and software troubleshooting.</p>
                            </li>
                            <li className='experience__model-service'>
                                <i className='uil uil-check-circle experience__model-icon'></i>
                                <p className='experience__model-info'> Setting up and
                                maintaining workstations, and resolving user issues to ensure seamless functionality..</p>
                            </li>
                            <li className='experience__model-service'>
                                <i className='uil uil-check-circle experience__model-icon'></i>
                                <p className='experience__model-info'>I contributed to system updates, 
                                    provided technical support for team members.</p>
                            </li>
                            <li className='experience__model-service'>
                                <i className='uil uil-check-circle experience__model-icon'></i>
                                <p className='experience__model-info'>Gained hands-on
                                experience in IT processes within a professional environment.</p>
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
