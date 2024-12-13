import '../styles/Header.css'

import { CircleHelp, Globe, CircleUser } from 'lucide-react'



export default function Header(){
  return(
    <div>
     <header className="header">
     <div className='head'>
      <h2>TESLR</h2>
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
     </header>
    </div>
  )
}