import React from 'react'

const DatabaseCloud = () => {
  return (
    <div className='skills__content'>
      <h3 className='skills__title'>Database & Cloud</h3>

      <div className='skills__box'>
        <div className='skills__group'>
            <div className='skills__data'>
            <i class="bx bx-badge-check"></i>

            <div>
                <h3 className='skills__name'>PostgreSQL</h3>
                <span className='skills__level'>Advanced</span>
            </div>
            </div>

            <div className='skills__data'>
            <i class="bx bx-badge-check"></i>

            <div>
                <h3 className='skills__name'>Supabase</h3>
                <span className='skills__level'>Advanced</span>
            </div>
            </div>

            <div className='skills__data'>
            <i class="bx bx-badge-check"></i>

            <div>
                <h3 className='skills__name'>MongoDB</h3>
                <span className='skills__level'>Intermediate</span>
            </div>
            </div>
        </div>

        <div className='skills__group'>
            <div className='skills__data'>
            <i class="bx bx-badge-check"></i>

            <div>
                <h3 className='skills__name'>Redis</h3>
                <span className='skills__level'>Intermediate</span>
            </div>
            </div>

            <div className='skills__data'>
            <i class="bx bx-badge-check"></i>

            <div>
                <h3 className='skills__name'>AWS</h3>
                <span className='skills__level'>Intermediate</span>
            </div>
            </div>

            <div className='skills__data'>
            <i class="bx bx-badge-check"></i>

            <div>
                <h3 className='skills__name'>Docker</h3>
                <span className='skills__level'>Intermediate</span>
            </div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default DatabaseCloud