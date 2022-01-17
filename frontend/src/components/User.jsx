import React, {Fragment} from "react";

import "./User.scss";
import singleMale from '../images/malesingle.png'
import clockSymb from '../images/clock.png'
import readingicon from '../images/reading.png'
import moviesicon from '../images/movie.png'
import fitnessicon from '../images/fitness.png'
import gamingicon from '../images/gaming.png'
import musicicon from '../images/music.png'



export default function User() {
  return (
<Fragment>
<article>
      <div className="left-section">
        <div className="photo-info-container">
          <div className='photo-container'>
            <img
              src="https://images.unsplash.com/photo-1642265410877-34f6fc0863c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=704&q=80"
              className="photo"
            />
          </div>
          <div className="right-of-photo">
            <div className="name-age">
              <div className="name-icon-container">
                <div className="name-icon">
                  <img
                    src={singleMale}
                    className="icon-name"
                  />
                   <span className="name"><strong>Bob Boblin  </strong></span>
                </div>

               

                <p><strong>Age:</strong> 35 years</p>
              </div>

              
            </div>

            <div className='location'>
              <p><strong>Location:</strong> Britannia Road, Mississauga </p>
            </div>
          </div>
        </div>

        <div className='likes'>
          <p><strong>Reason for Walk:</strong> Leisure, Socialing</p>
      
        </div>

        <div className='interests'>
          <p><strong>Interests:</strong></p>
          <img
            src={readingicon}
            className="activity-icons"
          />
                    <img
            src={moviesicon}
            className="activity-icons"
          />
                    <img
            src={fitnessicon}
            className="activity-icons"
          />
                    <img
            src={gamingicon}
            className="activity-icons"
          />
                    <img
            src={musicicon}
            className="activity-icons"
          />


        </div>
      </div>

      <div className="right-section">
        <div className="preferred-time">
          <div>
            <p>Preferred Time of Walk</p>
          </div>
          <div className="clock-image-container">
            <img
              src={clockSymb}
              alt='clock-image'
              className="time-of-day"
            />
          </div>

          <div>
            <p id='afternoon-tag'>Afternoon</p>
          </div>
        </div>
        <div className="chat-button-section">
     
          <button className="chatbutton"><span>Message Me!</span>
          </button>
        </div>
      </div>
    </article>


    <article>
      <div className="left-section">
        <div className="photo-info-container">
          <div className='photo-container'>
            <img
              src="https://images.unsplash.com/photo-1642265410877-34f6fc0863c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=704&q=80"
              className="photo"
            />
          </div>
          <div className="right-of-photo">
            <div className="name-age">
              <div className="name-icon-container">
                <div className="name-icon">
                  <img
                    src={singleMale}
                    className="icon-name"
                  />
                   <span className="name"><strong>Bob Boblin  </strong></span>
                </div>

               

                <p><strong>Age:</strong> 35 years</p>
              </div>

              
            </div>

            <div className='location'>
              <p><strong>Location:</strong> Britannia Road, Mississauga </p>
            </div>
          </div>
        </div>

        <div className='likes'>
          <p><strong>Reason for Walk:</strong> Leisure, Socialing</p>
      
        </div>

        <div className='interests'>
          <p><strong>Interests:</strong></p>
          <img
            src={readingicon}
            className="activity-icons"
          />
                    <img
            src={moviesicon}
            className="activity-icons"
          />
                    <img
            src={fitnessicon}
            className="activity-icons"
          />
                    <img
            src={gamingicon}
            className="activity-icons"
          />
                    <img
            src={musicicon}
            className="activity-icons"
          />


        </div>
      </div>

      <div className="right-section">
        <div className="preferred-time">
          <div>
            <p>Preferred Time of Walk</p>
          </div>
          <div className="clock-image-container">
            <img
              src={clockSymb}
              alt='clock-image'
              className="time-of-day"
            />
          </div>

          <div>
            <p id='afternoon-tag'>Afternoon</p>
          </div>
        </div>
        <div className="chat-button-section">
     
          <button className="chatbutton"><span>Message Me!</span>
          </button>
        </div>
      </div>
    </article>

</Fragment>
   
  );
}
