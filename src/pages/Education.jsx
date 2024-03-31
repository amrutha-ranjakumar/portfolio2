import React from 'react';
import './education.css';

function Education() {
  return (
    <div className="education">
      <h2 className='text-primary'>Education</h2>
      <div className="education-list">
        <div className="education-item">
          <div className="education-card">
            <div className="icon-container">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <div className="education-details">
              <h3>Bachelor of Computer Application</h3>
              <p>Thrananellur Arts And Science College, Thanissery, Thrissur university of Calicut</p>
              <span className="duration">2020-2023</span>
            </div>
          </div>
        </div>
        <div className="education-item">
          <div className="education-card">
            <div className="icon-container">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <div className="education-details">
              <h3>MERN Stack Development</h3>
              <p>Luminar Technolab Pvt Ltd, Kakkanad, Ernakulam.</p>
              <span className="duration">SEP 2023-PRESENT</span>
            </div>
          </div>
        </div>
        <div className="education-item">
          <div className="education-card">
            <div className="icon-container">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <div className="education-details">
              <h3>Computer Science</h3>
              <p>Highter Secondary Education, G.M.G.H.S.S irinjalakuda, Thrissur</p>
              <span className="duration">2018-2019</span>
            </div>
          </div>
        </div>
        <div className="education-item">
          <div className="education-card">
            <div className="icon-container">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <div className="education-details">
              <h3>High School</h3>
              <p>Sreekrisha Highter School Anandapuram, Thrissur</p>
              <span className="duration">2017-2018</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
