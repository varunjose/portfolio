import React from 'react'

const ProjectsItems = ({item, link}) => {
  return (
    <div className='projects__card' key={item.id}>
      <img src={item.image} alt='' className='projects__img' />
      <h3 className='projects__title'>{item.title}</h3>
      <p className='projects__subtitle'>{item.subtitle}</p>
      <a href={link} target='__blank' rel='noopener noreferrer' className='projects__button'>
        View <i className='bx bx-right-arrow-alt projects__button-icon'></i>
      </a>
    </div>
  )
}

export default ProjectsItems
