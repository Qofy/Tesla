// App.jsx
import './App.css'
import Header from './component/Header';
import Contrnt from './component/Pages';
import Button from "./component/Button"
import Modle3 from '../src/images/Homepage-Model-3-Desktop-US.png'
import ModleS from '../src/images/Homepage-Model-S-Desktop-US.png'
import ModleX from '../src/images/Homepage-Model-X-Desktop-US.png'
import TestDriveVideo from "./images/testdrive.mov"
import Powerwall from "./images/Homepage-Powerwall-3-Desktop-ROW.png"
import Accesories from "./images/Homepage-Accessories-Desktop-EMEA-v2.png"
import Manifacturing from "./images/manifacture.mp4"




const teslaModels = [
  {
    h3: 'Model 3',
    backgroundImage: Modle3 ,
    btn: <Button/>
  },
  {
    h3: 'Model S',
    price: "from 92,990$",
    backgroundImage: ModleS,
    btn: <Button/>
  },
  {
    h3: 'Model X',
    price: "From 97,990$",
    backgroundImage: ModleX,
    btn: <Button/>
  },
  {
    h3: "Experience Tesla",
    paragraph: "Arrange a test drive Today",
    bg_video: TestDriveVideo
  },

  {
    h3:"Powerwall",
    backgroundImage: Powerwall
  },

  {
    h3: "Accesories",
    backgroundImage: Accesories
  },

  {
    h4:"We are Tesla",
    bg_video: Manifacturing

  }
];

export default function App() {
  return (
    <div className='main-view'>
      <div className='notice'>
        <span className='spec'>Get 1 year of free Supercharger charging</span> 
        when you take delivery of your Model Y before December 31, 2024. 
        <span className='spec'>Explore inventory</span>
      </div>

      <Header />
      {/* content */}
      {teslaModels.map((model, index) => (
        <Contrnt 
          modelInfo={model}
          key={index}
        />
      ))}
      
    </div>
  )
}