import './App.css'
import Header from './component/Header'

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style>


export default function App(){
  return(
    <div className='main-view'>
      <div className='notice'>
      <span className='spec'>Get 1 year of free Supercharger charging</span> when you take delivery of your Model Y before December 31, 2024. <span className='spec'>Explore inventory</span>
      </div>
      <Header/>
    </div>
  )
}