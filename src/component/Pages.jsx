
import '../styles/Pages.css'


export default function Pages({ modelInfo }) {
  const style = modelInfo.bg_video? {} : {
    backgroundImage: `url(${modelInfo.backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }


  return (
    <div className="section" style={style}>
       {modelInfo.bg_video && (
        <video className="section__background-video" autoPlay loop muted playsInline>
          <source src={modelInfo.bg_video} 
          type="video/mp4"/>
        </video>
      )}
      <div className="section__content">
        <h3 className="section__model-type">{modelInfo.h3} 
        </h3>
        <h4 className='section__h4'>
          {modelInfo.h4}
        </h4>
        {modelInfo.price && <p className="section__model-price">{modelInfo.price}</p>}
        {modelInfo.paragraph && <p className="section__model_paragraph">{modelInfo.paragraph}</p>}
        {modelInfo.btn}
      </div>
     
        </div>
   
  )
}