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
        <div class="logo"><h1>Web Master</h1></div>
            <div class="search-box">
                <form>
                    <input type ="text" name ="search" id ="srch" placeholder="Search"/>
                    <button type ="submit"><i class="fa fa-search"></i></button>
                </form>
            </div>
            <ul>
              <Link to='/'>
              <li><a href="#">Home</a></li>
              </Link>
              <Link to='/project'>
              <li><a href="#">Project</a></li>
              </Link>
               <Link to='/education'>
               <li><a href="#">Education</a></li>
               </Link>
              <Link to='/contact'>
              <li><a href="#">Contact</a></li>
              </Link>
             
                <li>
                    <a href="#"><i class="fa fa-facebook"></i></a>
                    <a href="#"><i class="fa fa-twitter"></i></a>
                    <a href="#"><i class="fa fa-instagram"></i></a>
                      
                </li>
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