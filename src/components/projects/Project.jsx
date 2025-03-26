import React, { useEffect, useState } from 'react'
import { projectsData } from './Data'
import { projectsNav } from './Data'
import ProjectsItems from './ProjectsItems'

const Project = () => {
    const [item, setItem] = useState({name: 'All'});
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        if(item.name === 'All'){
            setProjects(projectsData);
        }
        else {
            const newProjects = projectsData.filter((project) => {
                return project.category === item.name;
            });
            setProjects(newProjects);
        }
    }, [item]);

    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent });
    }
  return (
    <div>
    <div className='projects__filters'>
      {projectsNav.map((item, index) => {
        return <span onClick={(e) => {
            handleClick(e, index);
        }} className='projects__item' key={index}>{item.name}
        </span>
      })}
    </div>

    <div className='projects__container container grid'>
        {
            projectsData.map((item) => {
                return <ProjectsItems item={item} key={item.id} />
            })
        }
    </div>
    </div>
  )
}

export default Project
