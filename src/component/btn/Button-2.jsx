export default function Button2({test = "test drive", className="btn2", className2 = "header__btn1"}){
  return(
    <div className={className}>
        <a href="#">
      <button className={className2}>
       {test}
      </button>
      </a>
    </div>
  )
}