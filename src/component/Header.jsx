import React, { useState, useEffect } from 'react';
import '../styles/Header.css';
import '../styles/Button.css';
import { CircleHelp, Globe, CircleUser } from 'lucide-react';
import Logo from "../images/tesla-logo-1.svg";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY && currentScrollY > 50) {
        // Scrolling down
        setIsScrolled(false);
      } else if (currentScrollY < prevScrollY) {
        // Scrolling up
        setIsScrolled(true);
      }

      setPrevScrollY(currentScrollY); // Update previous scroll position
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollY]);

  return (
    <div>
      <header className="header">
        <div className={`header__head ${isScrolled ? 'header__head--scrolled' : 'header__head--hidden'}`}>
          <img src={Logo} alt="Tesla Logo" className='header__logo-img' />
          <div className='header__middle'>
            <a href="#" style={{ color: isScrolled ? '#000' : '#fff' }}>Vehicles</a>
            <a href="#" style={{ color: isScrolled ? '#000' : '#fff' }}>Energy</a>
            <a href="#" style={{ color: isScrolled ? '#000' : '#fff' }}>Charge</a>
            <a href="#" style={{ color: isScrolled ? '#000' : '#fff' }}>Discover</a>
            <a href="#" style={{ color: isScrolled ? '#000' : '#fff' }}>Shop</a>
            <a href="#" style={{ color: isScrolled ? '#000' : '#fff' }}>We, Robot</a>
          </div>
          <div className='header__right-side'>
            <CircleHelp color={isScrolled ? '#000' : '#fff'} />
            <Globe color={isScrolled ? '#000' : '#fff'} />
            <CircleUser color={isScrolled ? '#000' : '#fff'} />
          </div>
        </div>

        <div className="header__info-box">
          <h1>
            <span className='header__h1'>Model Y</span>
            <span className='header__h2'>
              The Tesla environmental bonus of €6,000 ends on December 15, 2024
            </span>
            <span className='header__h3'>
              General terms and conditions apply. <span className='header__expo'>1</span> <span className='header__explore'>Explore inventory</span>
            </span>
          </h1>
        </div>

        <div className="header__btn">
          <a href="#">
            <button className="header__btn1">
              Order
            </button>
          </a>

          <a href="#">
            <button className="header__btn2">
              test drive
            </button>
          </a>
        </div>
        <p className='header_explore_link'>Explore Inventory</p>
      </header>
    </div>
  );
}