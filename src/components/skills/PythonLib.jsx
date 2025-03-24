import React from 'react'

const PythonLib = () => {
  return (
    <div className='skills__content'>
      <h3 className='skills__title'> Python Libraries</h3>

      <div className='skills__box'>
        <div className='skills__group'>
            <div className='skills__data'>
            <i class="bx bx-badge-check"></i>

            <div>
                <h3 className='skills__name'>Numpy</h3>
                <span className='skills__level'>Advanced</span>
            </div>
            </div>

            <div className='skills__data'>
            <i class="bx bx-badge-check"></i>

            <div>
                <h3 className='skills__name'>Pandas</h3>
                <span className='skills__level'>Intermediate</span>
            </div>
            </div>
            <div className='skills__data'>
            <i class="bx bx-badge-check"></i>

            <div>
                <h3 className='skills__name'>Matplotlib</h3>
                <span className='skills__level'>Intermediate</span>
            </div>
            </div>
        </div>

        <div className='skills__group'>
            <div className='skills__data'>
            <i class="bx bx-badge-check"></i>

            <div>
                <h3 className='skills__name'> PyTorch</h3>
                <span className='skills__level'>Basic</span>
            </div>
            </div>

            <div className='skills__data'>
            <i class="bx bx-badge-check"></i>

            <div>
                <h3 className='skills__name'>Tensorflow</h3>
                <span className='skills__level'>Intermediate</span>
            </div>
            </div>
            <div className='skills__data'>
            <i class="bx bx-badge-check"></i>

            <div>
                <h3 className='skills__name'>Flask</h3>
                <span className='skills__level'>Intermediate</span>
            </div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default PythonLib
