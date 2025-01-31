import React, { useState, useEffect } from 'react';
import '../styles/Header.css';
import '../styles/Button.css';
import { CircleHelp, Globe, CircleUser } from 'lucide-react';
import Logo from "../images/tesla-logo-1.svg";

export default function Header() {
  // State to control header visibility
  const [isHidden, setIsHidden] = useState(false);
  // State to track if page has been scrolled
  const [isScrolled, setIsScrolled] = useState(false);
  // State to store previous scroll position
  const [prevScrollY, setPrevScrollY] = useState(0);
  

  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY === 0) {
        // At top: reset both states
        setIsHidden(false);
        setIsScrolled(false);
      } else if (currentScrollY > prevScrollY) {
        // Scrolling down: hide header if past threshold
        if (currentScrollY > 50) setIsHidden(true);
      } else {
        // Scrolling up: show header with white background
        setIsHidden(false);
        if (currentScrollY > 50) setIsScrolled(true);
      }

      setPrevScrollY(currentScrollY);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    // Cleanup function to remove event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  return (
    <div>
      <header className="header">
        {/* Main header container with dynamic classes based on scroll state */}
        <div className={`header__head 
          ${isScrolled ? 'header__head--scrolled' : ''} 
          ${isHidden ? 'header__head--hidden' : ''}`}>
          {/* Tesla logo */}
          <img src={Logo} alt="Tesla Logo" className='header__logo-img' />
          {/* Navigation links */}
          <div className='header__middle'>
            {/* <div className="header__middle-content">
              <div className="header__content"></div>
            </div> */}
            <a href="#" style={{ color: isScrolled ? '#000' : '#fff' }}>Vehicles</a>
            <a href="#" style={{ color: isScrolled ? '#000' : '#fff' }}>Energy</a>
            <a href="#" style={{ color: isScrolled ? '#000' : '#fff' }}>Charge</a>
            <a href="#" style={{ color: isScrolled ? '#000' : '#fff' }}>Discover</a>
            <a href="#" style={{ color: isScrolled ? '#000' : '#fff' }}>Shop</a>
          </div>
          {/* Header icons */}
          <div className='header__right-side'>
            <CircleHelp color={isScrolled ? '#000' : '#fff'} />
            <Globe color={isScrolled ? '#000' : '#fff'} />
            <CircleUser color={isScrolled ? '#000' : '#fff'} />
          </div>
        </div>

        {/* Information box section */}
        <div className="header__info-box">
          <h1>
            {/* Main title */}
            <span className='header__h1'>Model Y</span>
            {/* Promotional text */}
            <span className='header__h2'>
              The Tesla environmental bonus of €6,000 ends on December 15, 2024
            </span>
            {/* Additional information */}
            <span className='header__h3'>
              General terms and conditions apply. <span className='header__expo'>1</span> <span className='header__explore'>Explore inventory</span>
            </span>
          </h1>
        </div>

        {/* Call-to-action buttons */}
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
        {/* Explore inventory link */}
        <p className='header_explore_link'>Explore Inventory</p>
      </header>
    </div>
  );
}