import React, { useState } from 'react'
import { Fileone } from './Fileone'
import { Link } from 'react-router-dom'

export const Filetwo = () => {


// const[name,setName] = useState("Adeline")
// const[age,setAge] = useState(20)
// const[role,setRole] = useState("developer")

    
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/fileone">Filkeone</Link>

        <Fileone name = "Jeffrin" age  = {25} role= "Developer"></Fileone>
        <Fileone name = "Rajikha" age  = {23} role= "Designer"></Fileone>
        <Fileone name = "Adeline" age  = {22} role= "Analyst"></Fileone>
        <Fileone name = "Rajitha" age  = {24} role= "HR"></Fileone>
    </div>
  )
}
