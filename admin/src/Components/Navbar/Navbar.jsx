import React from 'react'
import './Navbar.css'
import navProfile from '../../assets/user.jfif'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src={logo} alt="" />
        <p>VASTRA <h4>Admin Panel</h4> </p>
      </div>
        <img src={navProfile} className='nav-profile' alt="" />
    </div>
  )
}

export default Navbar