import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Product } from './Product'
import { Cart } from './Cart'



function App() {

  const [cart,setCart] =useState([])

  return (
    <>


      <BrowserRouter>
      <Routes>

        <Route path='/' element ={<Product cart = {cart} setCart = {setCart}></Product>}></Route>
        <Route path='/cart' element ={<Cart cart = {cart} setCart = {setCart}></Cart>}></Route>
      </Routes>
      
      </BrowserRouter>
  

    </>
  )
}

export default App