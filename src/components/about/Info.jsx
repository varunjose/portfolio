import React from 'react'

const Info = () => {
  return (
    <div className='about__info grid'>

      <div className='about__box'>
        <i class="bx bx-code-alt about__icon"></i>
        <h3 className='about__title'>Full Stack</h3>
        <span className='about__subtitle'>Developer</span>
      </div> 

      <div className='about__box'>
        <i class="bx bx-award about__icon"></i> 
        <h3 className='about__title'>Master's</h3>
        <span className='about__subtitle'>Computer Science</span>
      </div> 

      <div className='about__box'>
        <i class="bx bx-briefcase-alt about__icon"></i>
        <h3 className='about__title'>3+ Years</h3>
        <span className='about__subtitle'>Experience</span>
      </div> 

    </div>
  )
}

export default Info