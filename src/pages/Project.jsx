import React from 'react'
import Button from 'react-bootstrap/Button';
import Header from '../components/Header';
import { Link } from 'react-router-dom'
import './project.css'


function Project() {
  return (
    
    <>


    {/* <div className='mb-5 mt-5 p-5'></div> */}
    <div className='mt-5 ' style={{marginLeft:"4px"}}>
    <Link to='/' style={{textDecoration:"none",color:"white", fontSize:"20px",fontWeight:"600"}}>
        <i class="fa-solid fa-arrow-left "></i>Back To Home
      </Link>
    </div>
 
    <div >
    
    <body>
    <div class="flip-card">
      <div class="flip-card-front">
        <div class="inner">
          <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" class="icon" />
          <h3>avengers</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
            corrupti itaque dolore!
          </p>
        </div>
      </div>
      <div class="flip-card-back">
        <div class="inner">
          <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" class="icon" />
          <h3>iron man</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            voluptatum eius quam debitis, sit amet sunt neque ipsum?
          </p>
        </div>
      </div>
    </div>
    <div class="flip-card" >
      <div class="flip-card-front">
        <div class="inner">
          <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" class="icon" />
          <h3>avengers</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
            corrupti itaque dolore!
          </p>
        </div>
      </div>
      <div class="flip-card-back" >
        <div class="inner">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgMuWk69_c1oXY0N_NHqPga7QaXfQWGWGtzPxC06IKrZeE2pgxPgWup2HpIA84lyrQj6g&usqp=CAU" class="icon" />
          <h3>thor</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            voluptatum eius quam debitis, sit amet sunt neque ipsum?
          </p>
        </div>
      </div>
    </div>
    <div class="flip-card">
      <div class="flip-card-front">
        <div class="inner">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgMuWk69_c1oXY0N_NHqPga7QaXfQWGWGtzPxC06IKrZeE2pgxPgWup2HpIA84lyrQj6g&usqp=CAU" class="icon" />
          <h3>avengers</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
            corrupti itaque dolore!
          </p>
        </div>
      </div>
      <div class="flip-card-back">
        <div class="inner">
          <img src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-james-wheeler-414612.jpg&fm=jpg" class="icon" />
          <h3>spider-man</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            voluptatum eius quam debitis, sit amet sunt neque ipsum?
          </p>
        </div>
      </div>
    </div>
  </body>



<div >




  <body style={{marginTop:"80px"}} >
    <div class="flip-card">
      <div class="flip-card-front">
        <div class="inner">
          <img src="https://img.freepik.com/free-photo/space-background-realistic-starry-night-cosmos-shining-stars-milky-way-stardust-color-galaxy_1258-154643.jpg" class="icon" />
          <h3>avengers</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
            corrupti itaque dolore!
          </p>
        </div>
      </div>
      <div class="flip-card-back " >
        <div class="inner">
          <img src="https://i.imgur.com/aJauAJV.png" class="icon" />
          <h3>iron man</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            voluptatum eius quam debitis, sit amet sunt neque ipsum?
          </p>
        </div>
      </div>
    </div>
    <div class="flip-card" >
      <div class="flip-card-front">
        <div class="inner">
          <img src="https://i.imgur.com/C9DWUDi.png" class="icon" />
          <h3>avengers</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
            corrupti itaque dolore!
          </p>
        </div>
      </div>
      <div class="flip-card-back">
        <div class="inner">
          <img src="https://i.imgur.com/ep0HjjD.png" class="icon" />
          <h3>thor</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            voluptatum eius quam debitis, sit amet sunt neque ipsum?
          </p>
        </div>
      </div>
    </div>
    <div class="flip-card">
      <div class="flip-card-front">
        <div class="inner">
          <img src="https://i.imgur.com/C9DWUDi.png" class="icon" />
          <h3>avengers</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
            corrupti itaque dolore!
          </p>
        </div>
      </div>
      <div class="flip-card-back">
        <div class="inner">
          <img src=" https://i.imgur.com/wROMxVv.png" class="icon" />
          <h3>spider-man</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            voluptatum eius quam debitis, sit amet sunt neque ipsum?
          </p>
        </div>
      </div>
   
    </div>
  </body>
  
   
  
  </div>
    </div>
  
    </>
  
  )
}

export default Project