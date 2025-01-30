export default function Button({order = "Order", test1 = "test drive"}){
  return(
    <div className="btn">
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