import React from 'react'
import { Link } from 'react-router-dom'

export const Cart = ({ cart, setCart }) => {

    const remove = (id) => {
        const updatedcard = cart.filter((item) => item.id !== id)
        setCart(updatedcard)
        alert("Item removed from cart")

    }


    const increaseqty = (id) => {
        setCart(
            cart.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        )
    }


    const total = cart.reduce(
        (acc,item) => acc+item.quantity *parseFloat(item.productprice),0
    )
    .toFixed(2)

    const decreaseqty = (id) =>{
       setCart(cart.map((item) =>

        item.id === id && item.quantity>1 ? {...item,quantity :item.quantity -1} : item
    ))
    }
    return (
        <div style={{ display: "flex", gap: "50px", flexWrap: "wrap" }}>
            <Link to="/">Home</Link>


            {cart.length === 0 ? (
                <h3>Your cart is empty</h3>
            ) : (
                <div>

                    {cart.map((item) => (
                        <div key={item.id} style={{ border: "2px solid gray", padding: "20px", textAlign: "center", borderRadius: "12px" }}>
                            <img src={item.productimage} />
                            <h3>{item.productname}</h3>
                            <h4>{item.productprice}</h4>

                            <h3>{item.quantity}</h3>
                            <button onClick={()=>increaseqty(item.id)}>+</button>
                            <button onClick={()=>decreaseqty(item.id)}>-</button> <br />
                            <button onClick={() => remove(item.id)}>Remove</button>

                        </div>
                    ))}
                </div>

            )}

            <h2>Total : ${total}</h2>


        </div >
    )
}
