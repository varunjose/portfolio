import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './header.css';

const Header = () => {
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState('#home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`header ${scrolled ? 'scroll-header' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <nav className='nav container'>
        <motion.a
          href="index.html"
          className='nav__logo'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Varun Jose
        </motion.a>

        <AnimatePresence>
          {(Toggle || window.innerWidth > 768) && (
            <motion.div
              className={Toggle ? 'nav__menu show-menu' : 'nav__menu'}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ul className='nav__list grid'>
                {[
                  { href: '#home', icon: 'uil-estate', label: 'Home' },
                  { href: '#projects', icon: 'uil-folder-check', label: 'Projects' },
                  { href: '#about', icon: 'uil-user', label: 'About' },
                  { href: '#experience', icon: 'uil-bag-alt', label: 'Experience' },
                  { href: '#skills', icon: 'uil-file-alt', label: 'Skills' },
                  { href: '#qualification', icon: 'uil-award-alt', label: 'Qualification' },
                  { href: '#contact', icon: 'uil-message', label: 'Contact' },
                ].map((item, index) => (
                  <motion.li
                    className='nav__item'
                    key={item.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <motion.a
                      href={item.href}
                      onClick={() => {
                        setActiveNav(item.href);
                        showMenu(false);
                      }}
                      className={activeNav === item.href ? 'nav__link active-link' : 'nav__link'}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <i className={`uil ${item.icon} nav__icon`}></i> {item.label}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>

              <motion.i
                className='uil uil-times nav__close'
                onClick={() => showMenu(!Toggle)}
                whileHover={{ rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              ></motion.i>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          className='nav__toggle'
          onClick={() => showMenu(!Toggle)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <i className='uil uil-apps'></i>
        </motion.div>
      </nav>
    </motion.header>
  );
};

export default Header;