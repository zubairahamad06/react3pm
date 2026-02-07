import React from 'react'
import "./index.css"
import productdetails from './Productdetails'
import { Link } from 'react-router-dom'

export const Product = ({ cart, setCart }) => {

  const addtocart = (item) => {

    if (!cart.find((p) => p.id === item.id)) {
      setCart([...cart, {...item,quantity :1}])
      alert(`${item.productname} added to cart succesfully`)
    }
    else {
      alert(`${item.productname} already added in the cart`)
    }
  }
  return (

    <div>

      <Link to="/cart">Cart({cart.length})</Link>


      <div style={{ display: "flex", gap: "50px", flexWrap: "wrap" }}>
        {productdetails.map((item) => (
          <div key={item.id} style={{ border: "2px solid gray", padding: "20px", textAlign: "center", borderRadius: "12px" }}>
            <img src={item.productimage} alt={item.productname} />
            <div className='part'>

              <h3>{item.productname}</h3>
              <h4>{item.productprice}</h4>
            </div>
            <button onClick={() => addtocart(item)}>Add to Cart</button>

          </div>
        ))}
      </div>
    </div>
  )
}
