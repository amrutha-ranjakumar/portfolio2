import React from 'react'
import './Header.css'
import Home from '../pages/Home'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
    
    <div>

    <header>
        <input type ="checkbox" name ="" id ="chk1"/>
        <Link to='/'>
        <div class="logo"><h1></h1></div>
        </Link>
      
         
            <ul >
                <Link to='/'  style={{ textDecoration: "none", color: "red",fontSize: "26px"  }}>
                <li><a href="#">Home</a></li>
                </Link>
                <Link to='/project'  style={{ textDecoration: "none", color: "red",fontSize: "26px"  }}>
                <li><a href="#">About</a></li>
                </Link>
             
             
                <Link to='/project'  style={{ textDecoration: "none", color: "red",fontSize: "26px"  }}>
                <li><a href="#">project</a></li>
                
                </Link>
       
                    
                 <Link to='/project'  style={{ textDecoration: "none", color: "red",fontSize: "26px"  }}>
                 <li><a href="#">Education</a></li>
                 </Link> 
                 <Link to='/contact' style={{ textDecoration: "none", color: "red",fontSize: "26px"  }} >
                 <li><a href="#">Contact</a></li>
                 </Link> 
               
             
              
            </ul>
            <div class="menu">
                <label for="chk1">
                    <i class="fa fa-bars"></i>
                </label>
            </div>
    </header>


    </div>
    </>
   
  )
}

export default Header