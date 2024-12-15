import '../styles/Header.css'

import { CircleHelp, Globe, CircleUser } from 'lucide-react'



export default function Header(){
  return(
    <div>
     <header className="header">
     <div className='head'>
      <h2 className='tesla-logo'>TESLR</h2>
      <div className='middle'>
    
          <a href="#">vehicles</a>
          <a href="#">energy</a>
          <a href="#">Charge</a>
          <a href="#">Discover</a>
          <a href="#">shop</a>
          <a href="#">We, Robot</a>
        
      </div>
      <div className='right-side'>
      <CircleHelp color='#fff'/>
      <Globe color='#fff'/>
      <CircleUser color='#fff'/>
      </div>
     </div>

     <div className="info-box">
      <h1>
      <span className='h1'>
      Model Y
      </span>
      <span className='h2'>
The Tesla environmental bonus of €6,000 ends on December 15, 2024
      </span>

      <span className='h3'>
General terms and conditions apply. <span className='expo'>1</span> <span className='explore'>Explore inventory</span> 
      </span>

      </h1>
     </div>

     
     <div className="btn">
     <a href="#"><buton className="btn1"> Order</buton></a> 
      <a href="#"><buton className="btn2"> test drive</buton></a> 
     </div>
     </header>
    </div>
  )
}