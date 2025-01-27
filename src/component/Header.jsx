import '../styles/Header.css'
import '../styles/Button.css'
import { CircleHelp, Globe, CircleUser } from 'lucide-react'
import Logo from "../images/tesla-logo-1.svg"


export default function Header(){
  
  return(
    <div>
     <header className="header">
     <div className='header__head'>
      <img src={Logo} alt="Tesla Logo" className='header__logo-img'/>
      <div className='header__middle'>
          <a href="#">Vehicles</a>
          <a href="#">Energy</a>
          <a href="#">Charge</a>
          <a href="#">Discover</a>
          <a href="#">Shop</a>
          <a href="#">We, Robot</a>
      </div>
      <div className='header__right-side'>
        <CircleHelp color='#fff'/>
        <Globe color='#fff'/>
        <CircleUser color='#fff'/>
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
     
     <div className=" header__btn">
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
  )
}