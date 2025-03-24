import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer__container container grid'>
            <h1 className='footer__title'>Varun</h1>

            <ul className='footer__list'>
                <li>
                    <a href='#home' className='footer__link'>Home</a>
                </li>
                <li>
                    <a href='#about' className='footer__link'>About</a>
                </li>
                <li>
                    <a href='#skills' className='footer__link'>Skills</a>
                </li>
                <li>
                    <a href='#projects' className='footer__link'>Projects</a>
                </li>
                <li>
                    <a href='#qualification' className='footer__link'>Qualification</a>
                </li>
                <li>
                    <a href='#contact' className='footer__link'>Contact</a>
                </li>
            </ul>

            <div className='footer__social'>
                <a href='https:://www.linkedin.com' className='footer__social-link' target='_blank' rel='noreferrer'>
                    <i className='bx bxl-linkedin'></i>
                </a>
                <a href='https:://www.github.com' className='footer__social-link' target='_blank' rel='noreferrer'>
                    <i className='bx bxl-github'></i>
                </a>
                <a href='https:://www.instagram.com' className='footer__social-link' target='_blank' rel='noreferrer'>
                    <i className='bx bxl-instagram'></i>
                </a>
            </div>

            <span className='footer__copy'>&#169; Varun. All right reserved</span>
        </div>
      
    </footer>
  )
}

export default Footer
