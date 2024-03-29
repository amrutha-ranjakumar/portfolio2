import React from 'react'
import Button from 'react-bootstrap/Button';
import Header from '../components/Header';
import { Link } from 'react-router-dom'

import './project.css'


function Project() {
  return (

    <>



      <div className='mt-5 ' style={{ marginLeft: "4px" }}>
        <Link to='/' style={{ textDecoration: "none", color: "white", fontSize: "20px", fontWeight: "600" }}>
          <i class="fa-solid fa-arrow-left "></i>Back To Home
        </Link>
      </div>

      <div >

        <body>
          <div class="flip-card">
            <div class="flip-card-front">
              <div class="inner">

                <h3>Neflix-Clone</h3>
                <p>

                  I developed a responsive Netflix clone using HTML, CSS, React, and integrated an API for dynamic content.
                </p>
                <a href='https://astonishing-salamander-f3fd99.netlify.app' style={{ textDecoration: "none", color: 'black' }}> <i class="fa-solid fa-link ms-2" fontSize="100px"></i></a>
              </div>
            </div>
            <div class="flip-card-back">
              <div class="inner">

                <h3>Neflix-Clone</h3>
                <p>
                  I developed a responsive Netflix clone website
                  using HTML, CSS, and React, integrating API
                  functionality for dynamic content display.
                </p>
                <a href='https://astonishing-salamander-f3fd99.netlify.app' style={{ textDecoration: "none", color: 'black' }}> <i class="fa-solid fa-link ms-2"></i></a>
              </div>
            </div>
          </div>
          <div class="flip-card" >
            <div class="flip-card-front">
              <div class="inner">

                <h3>Music Player</h3>
                <p>
                  Crafted a responsive music player site with HTML, CSS, JavaScript, Node.js, MongoDB, and React, offering playlist management
                </p>
                <a href='https://astonishing-salamander-f3fd99.netlify.app' style={{ textDecoration: "none", color: 'black' }}><i class="fa-solid fa-link ms-2"></i></a>
              </div>
            </div>
            <div class="flip-card-back" >
              <div class="inner">

                <h3>Music Player Website</h3>
                <p>
                  Crafted a responsive music player site with HTML, CSS, JavaScript, Node.js, MongoDB, and React, offering playlist management
                </p>
                <a href='https://astonishing-salamander-f3fd99.netlify.app' style={{ textDecoration: "none", color: 'black' }}> <i class="fa-solid fa-link ms-2"></i></a>
              </div>
            </div>
          </div>
          <div class="flip-card">
            <div class="flip-card-front">
              <div class="inner">

                <h3>E Kart Website</h3>
                <p>



                  Built e-Kart site: HTML, CSS, React, Redux for product display, wishlist, cart, and scalable data management.
                </p>
                <a href='https://e-kart-redux-five.vercel.app' style={{ textDecoration: "none", color: 'black' }}> <i class="fa-solid fa-link ms-2"></i></a>
              </div>
            </div>
            <div class="flip-card-back">
              <div class="inner">

                <h3>E Kart Website</h3>
                <p>



                  Built e-Kart site: HTML, CSS, React, Redux for product display, wishlist, cart, and scalable data management.
                </p>
                <a href='https://e-kart-redux-five.vercel.app/' style={{ textDecoration: "none", color: 'black' }}> <i class="fa-solid fa-link ms-2"></i></a>
              </div>
            </div>
          </div>
        </body>



        <div >




          <body style={{ marginTop: "80px" }} >
            <div class="flip-card">
              <div class="flip-card-front">
                <div class="inner">

                  <h3>Restaurant Website</h3>
                  <p>

                    Developed a user-friendly Restaurant website with HTML, CSS, React, Redux, featuring intuitive UI elements for reviews, hours, and key details.
                  </p>
                  <a href='https://restaurant-eight-liard.vercel.app' style={{ textDecoration: "none", color: 'black' }}> <i class="fa-solid fa-link ms-2"></i></a>
                </div>
              </div>
              <div class="flip-card-back " >
                <div class="inner">

                  <h3>Restaurant Website</h3>
                  <p>

                    Developed a user-friendly Restaurant website with HTML, CSS, React, Redux, featuring intuitive UI elements for reviews, hours, and key details.
                  </p>
                  <a href='https://restaurant-eight-liard.vercel.app' style={{ textDecoration: "none", color: 'black' }}> <i class="fa-solid fa-link ms-2"></i></a>
                </div>
              </div>
            </div>
            <div class="flip-card" >
              <div class="flip-card-front">
                <div class="inner">

                  <h3>Media Player</h3>
                  <p>

                    Median Player Project: HTML, CSS, JavaScript, React site; responsive, video cards, categories, watch history functionality with JSON server.
                  </p>
                  <a href='https://front-media-player.vercel.app' style={{ textDecoration: "none", color: 'black' }}> <i class="fa-solid fa-link ms-2"></i></a>
                </div>
              </div>
              <div class="flip-card-back">
                <div class="inner">

                  <h3>Media Player</h3>
                  <p>

                    Median Player Project: HTML, CSS, JavaScript, React site; responsive, video cards, categories, watch history functionality with JSON server.
                  </p>
                  <a href='https://front-media-player.vercel.app' style={{ textDecoration: "none", color: 'black' }}> <i class="fa-solid fa-link ms-2"></i></a>
                </div>
              </div>
            </div>
            <div class="flip-card">
              <div class="flip-card-front">
                <div class="inner">

                  <h3>Project Fair</h3>
                  <p>


                    The project fair website, crafted using HTML, CSS, JavaScript, Node.js, MongoDB, and React, ensures responsiveness.
                  </p>
                  <a href='https://astonishing-salamander-f3fd99.netlify.app' style={{ textDecoration: "none", color: 'black' }}> <i class="fa-solid fa-link ms-2"></i></a>
                </div>
              </div>
              <div class="flip-card-back">
                <div class="inner">

                  <h3>Project Fair</h3>
                  <p>


                    The project fair website, crafted using HTML, CSS, JavaScript, Node.js, MongoDB, and React, ensures responsiveness.
                  </p>
                  <a href='https://astonishing-salamander-f3fd99.netlify.app' style={{ textDecoration: "none", color: 'black' }}> <i class="fa-solid fa-link ms-2"></i></a>
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