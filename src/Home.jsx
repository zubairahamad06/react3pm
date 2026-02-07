import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Fileone } from './Fileone'
import { Props } from './Props'

export const Home = () => {


  const [count, setCount] = useState(0)


  return (
    <div>


      <Link to="/fileone">Fileone</Link>
      <Link to="/filetwo">Filetwo</Link>


      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>

      <button onClick={() => setCount(count - 1)}>-</button>


      <Props name = "Adeline" age = {20} role = "Developer"></Props>

    </div>
  )
}
