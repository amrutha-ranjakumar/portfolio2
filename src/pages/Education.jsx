import React from 'react'
import './education.css'

function Education() {
  return (
    <body>
      <div class="wrapper">
        <div class="center-line">
          <a href="#" class="scroll-icon"><i class="fas fa-caret-up"></i></a>
        </div>
        <div class="row row-1">
          <section>
            <i class="icon fas fa-home"></i>
            <div class="details" style={{ width: "1000px", height: "100px" }}>
              <span class="title">BACHELOR OF COMPUTER APPLICATION</span>

            </div>
            <p>Thrananellur Arts And Science College ,Thanissery,Thrissur university of Calicut</p>
            <div class="bottom">

              <i>2020-2023</i>
            </div>
          </section>
        </div>
        <div class="row row-2">
          <section>
            <i class="icon fas fa-star"></i>
            <div class="details" style={{ width: "1000px", height: "100px" }}>
              <span class="title">MERN STACK DEVELOPMENT</span>

            </div>
            <p>Luminar Technolab Pvt Ltd ,Kakkanad,Ernakulam.</p>
            <div class="bottom">

              <i>SEP 2023-PRESENT</i>
            </div>
          </section>
        </div>
        <div class="row row-1">
          <section>
            <i class="icon fas fa-rocket"></i>
            <div class="details" style={{ width: "1000px", height: "100px" }}>
              <span class="title">COMPUTER SCIENCE</span>

            </div>
            <p>Highter Secondary Education ,G.M.G.H.S.S irinjalakuda,Thrissur</p>
            <div class="bottom">

              <i>2018-2019</i>
            </div>
          </section>
        </div>
        <div class="row row-2">
          <section>
            <i class="icon fas fa-globe"></i>
            <div class="details" style={{ width: "1000px", height: "100px" }}>
              <span class="title">HIGH SCHOOL</span>

            </div>
            <p>Sreekrisha Highter School Anandapuram ,Thrissur</p>
            <div class="bottom">

              <i>2017-2018</i>
            </div>
          </section>
        </div>

      </div>
    </body>
  )
}

export default Education