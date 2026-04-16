import React from 'react';

const Backend = () => {
  return (
    <div className='skills__content'>
      <h3 className='skills__title'>Systems & Infrastructure</h3>

      <div className='skills__box'>
        <div className='skills__group'>
          <div className='skills__data'>
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className='skills__name'>Linux Internals</h3>
              <span className='skills__level'>Advanced</span>
            </div>
          </div>

          <div className='skills__data'>
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className='skills__name'>VMware vSphere</h3>
              <span className='skills__level'>Intermediate</span>
            </div>
          </div>

          <div className='skills__data'>
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className='skills__name'>Kubernetes</h3>
              <span className='skills__level'>Advanced</span>
            </div>
          </div>
        </div>

        <div className='skills__group'>
          <div className='skills__data'>
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className='skills__name'>Docker</h3>
              <span className='skills__level'>Advanced</span>
            </div>
          </div>

          <div className='skills__data'>
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className='skills__name'>Terraform</h3>
              <span className='skills__level'>Intermediate</span>
            </div>
          </div>

          <div className='skills__data'>
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className='skills__name'>GitHub Actions CI/CD</h3>
              <span className='skills__level'>Advanced</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
