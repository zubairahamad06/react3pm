import React from 'react'
import { Home } from './Home'

export const Props = ({ name, age, role }) => {
  return (
    <div>
      <h2>{name}</h2>
      <h2>{age}</h2>
      <h2>{role}</h2>
    </div>
  )
}
