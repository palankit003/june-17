import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
    <nav className='nav-main-wrap'>
      <div className='nav-bar'>
        <img src='https://joinbridge.com/wp-content/uploads/2020/03/Logo.svg' alt="Logo" className='logo'></img>
        <ul>
          <li className='link-btn'>Retail</li>
          <li className='link-btn'>Intelligence</li>
          <li className='link-btn'>Content</li>
          <li><div className='login-btn'>Login</div></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar