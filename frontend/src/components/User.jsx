import React, { Fragment } from "react";


import "./User.scss";

export default function User(props) {

  const genderImg =
    props.gender === "Male" || props.gender === "male"
      ? "/images/malesingle.png"
      : "/images/femalesingle.png";

  return (
    <Fragment>
      <article>
        <div className="left-section">
          <div className="photo-info-container">
            <div className="photo-container">
              <img src={props.picture} className="photo" />
            </div>
            <div className="right-of-photo">
              <div className="name-age">
                <div className="name-icon-container">
                  <div className="name-icon">
                    <img src={genderImg} className="icon-name" />
                    <span className="name">
                      <strong>{props.name} </strong>
                    </span>
                  </div>

                  <div className="age-container">
                    <strong>Age:</strong> {props.age} years
                  </div>
                </div>
              </div>

              <div className="location">
                <p className="user-p">
                  <strong>Location:</strong> {props.street_name}, {props.city}{" "}
                </p>
              </div>
              <div className="likes">
                <p className="user-p">
                  <strong>Reason for Walk:</strong> {props.walk_reason}
                </p>
              </div>

              <div className="interests">
                <p className="user-p">
                  <strong>Interests:</strong> {props.interests}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="right-section">
          <div className="preferred-time-user">
            <div>
              <p className="user-p-pref" >Preferred Time of Walk</p>
            </div>
            <div className="clock-image-container">
              <img
                src="/images/clock.png"
                alt="clock-image"
                className="time-of-day"
              />
            </div>

            <div>
              <p className="user-p-pref" id="afternoon-tag">{props.walk_time}</p>
            </div>
          </div>
          <div className="chat-button-section">

          <button type="button" className="chatbutton">
          <a className="chatbutton" className="chatbutton" href="/Chat" target="_blank" >Let hang out!</a>
          </button>
          </div>
        </div>
      </article>

    </Fragment>
  );
}
