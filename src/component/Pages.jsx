import Button from "./Button"
import '../styles/Pages.css'

export default function Pages({ modelInfo }) {
  const style = {
    backgroundImage: `url(${modelInfo.backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  return (
    <div className="phase2" style={style}>
      <div className="phase2__content">
        <h3 className="phase2__model-type">{modelInfo.h3}</h3>
        {modelInfo.price && <p className="phase2__model-price">{modelInfo.price}</p>}
      </div>
      <Button className="phase2__button" />
    </div>
  )
}
