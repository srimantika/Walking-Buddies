import React, { Fragment } from "react";

import "../styles/variables.scss";
import "./UserList.scss";
import User from "./User";

import "./User.scss";

export default function UserList(props) {

  // const listOfUsers = props.users.forEach((user) => {
  //   <User
  //    key = {user.id}
  //    name = {user.name}
  //    picture = {user.picture}
  //    age = {user.age}
  //    gender = {user.gender}
  //    street_name = {user.street_name}
  //    city = {user.city}
  //    walk_reason = {user.walk_reason}
  //    walk_time = {user.walk_time}
  //    interests = {user.interests}
  //   />
  // })

  if(!props.users.users) {
 return "loading"
  }
 
  console.log("all props:",props.users.users[0])
  
    const {name, picture, gender, age, street_name, city, walk_reason, walk_time, interests} = props.users.users[0]

  return (
    <Fragment>
      <img src="/images/userlist_topimg.jpg" className="top-image" />
      <div className="filter-section">
        <div className="filter-options">
          <button className="btn filter-button">Filter</button>

          <button
            className="btn btn-primary dropdown-toggle"
            data-toggle="dropdown"
          >
            Age
          </button>

          <button
            className="btn btn-primary dropdown-toggle"
            data-toggle="dropdown"
          >
            Gender
          </button>

          <button
            className="btn btn-primary dropdown-toggle"
            data-toggle="dropdown"
          >
            Time of Walk
          </button>

          <button
            className="btn btn-primary dropdown-toggle"
            data-toggle="dropdown"
          >
            Reason of Walk
          </button>

          
        </div>
      </div>
      <User
      
      name = {name}
      picture = {picture}
      age = {age}
      // gender = {gender}
      street_name = {street_name}
      city = {city}
      walk_reason = {walk_reason}
      walk_time = {walk_time}
      interests = {interests}
      />

      {/* {listOfUsers} */}

    </Fragment>
  );
}
