export default function Button({order = "Order", test1 = "test drive", className4="btn"}){
  return(
    <div className={className4}>
       <a href="#">
      <button className="header__btn1">
       {order}
      </button>
      </a>
      <a href="#">
      <button className="header__btn2">
        {test1}
      </button>
      </a>
    </div>
  )
}