// App.jsx
import './App.css'
import Header from './component/Header';
import P1 from './component/Pages';
import Modle3 from '../src/images/Homepage-Model-3-Desktop-US.png'
import ModleS from '../src/images/Homepage-Model-S-Desktop-US.png'
import ModleX from '../src/images/Homepage-Model-X-Desktop-US.png'


const teslaModels = [
  {
    h3: 'Model 3',
    backgroundImage: Modle3  // Add background image paths
  },
  {
    h3: 'Model S',
    price: "from 92,990$",
    backgroundImage: ModleS
  },
  {
    h3: 'Model X',
    price: "From 97,990$",
    backgroundImage: ModleX
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
      {teslaModels.map((model, index) => (
        <P1 
          modelInfo={model}
          key={index}
        />
      ))}
      
    </div>
  )
}