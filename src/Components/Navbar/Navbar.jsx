import React from 'react'
import './Navbar.css'
import api_logo from '../Assets/api.png'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
  <div className='navbar'>
    <div className='nav-logo'>
      <img src={api_logo} alt=""/>
    </div>
    <ul className="navbar-menu">
     <Link to='/'       style={{textDecoration:'none'}}><li>User</li></Link>
     <Link to='/post'   style={{textDecoration:'none'}}><li>Post</li></Link>
     <Link to='/comment'style={{textDecoration:'none'}}><li>Comment</li></Link>
     <Link to='/form'style={{textDecoration:'none'}}><li>Form</li></Link>
     
      </ul>
  </div>
  )
}

export default Navbar;
