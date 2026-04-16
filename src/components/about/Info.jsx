import React from 'react';

const Info = () => {
  return (
    <div className='about__info grid'>
      <div className='about__box'>
        <i className="bx bx-code-alt about__icon"></i>
        <h3 className='about__title'>Systems</h3>
        <span className='about__subtitle'>Automation & Infra</span>
      </div>

      <div className='about__box'>
        <i className="bx bx-award about__icon"></i>
        <h3 className='about__title'>Master&apos;s</h3>
        <span className='about__subtitle'>Computer Science</span>
      </div>

      <div className='about__box'>
        <i className="bx bx-briefcase-alt about__icon"></i>
        <h3 className='about__title'>5+ Years</h3>
        <span className='about__subtitle'>Experience</span>
      </div>
    </div>
  );
};

export default Info;
