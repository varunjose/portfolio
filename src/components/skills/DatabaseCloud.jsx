import React from 'react';

const DatabaseCloud = () => {
  return (
    <div className='skills__content'>
      <h3 className='skills__title'>Backend, Data & Observability</h3>

      <div className='skills__box'>
        <div className='skills__group'>
          <div className='skills__data'>
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className='skills__name'>FastAPI</h3>
              <span className='skills__level'>Advanced</span>
            </div>
          </div>

          <div className='skills__data'>
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className='skills__name'>PostgreSQL</h3>
              <span className='skills__level'>Advanced</span>
            </div>
          </div>

          <div className='skills__data'>
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className='skills__name'>Redis</h3>
              <span className='skills__level'>Intermediate</span>
            </div>
          </div>
        </div>

        <div className='skills__group'>
          <div className='skills__data'>
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className='skills__name'>Asyncio</h3>
              <span className='skills__level'>Intermediate</span>
            </div>
          </div>

          <div className='skills__data'>
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className='skills__name'>Distributed Tracing</h3>
              <span className='skills__level'>Intermediate</span>
            </div>
          </div>

          <div className='skills__data'>
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className='skills__name'>GCP / AWS</h3>
              <span className='skills__level'>Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatabaseCloud;
