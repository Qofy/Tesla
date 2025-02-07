// App.jsx
import './App.css'
import Header from './component/Header';
import Contrnt from './component/Pages';
import Button from "./component/btn/Button";
import Button2 from "./component/btn/Button-2";
import Footer from "./component/Footer";


import Modle3 from './images/Homepage-Model-3-Desktop-US.png'
import ModleS from './images/Homepage-Model-S-Desktop-US.png'
import ModleX from './images/Homepage-Model-X-Desktop-US.png'
import TestDriveVideo from "./images/testdrive.mov"
import Powerwall from "./images/Homepage-Powerwall-3-Desktop-ROW.png"
import Accesories from "./images/Homepage-Accessories-Desktop-EMEA-v2.png"

const Manifacturing = "https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/Homepage-We-Are-Tesla-Desktop.mp4"




const teslaModels = [
  {
    h3: 'Model 3',
    backgroundImage: Modle3 ,
    btn: <Button className4="model3__btn"/>
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
    bg_video: TestDriveVideo,
    btn: <Button2/>
  },

  {
    h3:"Powerwall",
    backgroundImage: Powerwall,
    btn: <Button order = "Get a quote" test1 = "More information"/>
  },

  {
    h3: "Accesories",
    backgroundImage: Accesories,
    btn: <Button2 test = "Shop now"/>
  },

  {
    h4:"We are Tesla",
    bg_video: Manifacturing,
    btn: <Button2 test = "Come to Tesla" className = "btn3" className2 = "header__btn3"/>

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
      ))};

      <Footer/>
      
    </div>
  )
}