import React from 'react'
import { Link } from 'react-router-dom'
import { Props } from './Props'
// import './fileone.css'

export const Fileone = () => {


  const users = [{ name: "Jeffrin", age: 25, role: "Developer" },
  { name: "Rajikha", age: 23, role: "Designer" },
  { name: "RAjitha", age: 24, role: "Analyst" },
  { name: "Adeline", age: 22, role: "HR" }
  ]

  return (
    <div className='hi'>

      <Link to="/">Home</Link>
      <Link to="/filetwo">filetwo</Link>


      {users.map((user, index) => (
        <Props
          key={index} 
          name={user.name}
          age={user.age}
          role={user.role}>
        </Props>
      ))}
    </div>
  )
}



