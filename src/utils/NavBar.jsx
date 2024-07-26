import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='navBar'>
      <div className="logo">
      <Link className='navLogoLink' to={'/'}>
        Book<span>your</span>show
      </Link>
      </div>
      <div className="location">
        <select>
            <option value="bengaluru">Bengaluru</option>
        </select>
      </div>
    </div>
  )
}

export default NavBar
