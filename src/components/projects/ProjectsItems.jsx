import React from 'react'

const ProjectsItems = ({item}) => {
  return (
    <div className='projects__card' key={item.id}>
      <img src={item.image} alt='' className='projects__img' />
      <h3 className='projects__title'>{item.title}</h3>
      <a href='#' className='projects__button'>
        View <i className='bx bx-right-arrow-alt projects__button-icon'></i>
      </a>
    </div>
  )
}

export default ProjectsItems
