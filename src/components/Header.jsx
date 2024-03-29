import React from 'react'
import './Header.css'
import Home from '../pages/Home'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
    
    <div>

    <body>
    <header>
        <input type ="checkbox" name ="" id ="chk1"/>
        {/* <div class="logo"><h1>Portfolio</h1></div> */}
           
            <ul>
             
              <Link to='/' className='me-5 ' style={{ textDecoration: "none", color: "red",fontSize: "26px"  }} href="#home">HOME</Link>
              <Link to='/project' className='me-5 ' style={{ textDecoration: "none", color: "red",fontSize: "26px"  }} href="#home">PROJECT</Link>
              <Link to='/education' className='me-5 ' style={{ textDecoration: "none", color: "red",fontSize: "26px"  }} href="#home">EDUCATION</Link>
              <Link to='/contact' className='me-5 ' style={{ textDecoration: "none", color: "red",fontSize: "26px"  }} href="#home">CONTACT</Link>
             
            </ul>
            <div class="menu">
                <label for="chk1">
                    <i class="fa fa-bars"></i>
                </label>
            </div>
    </header>
</body>

    </div>
    </>
   
  )
}

export default Header