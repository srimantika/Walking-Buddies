import React, { Fragment } from "react";

import "../styles/variables.scss";
import "./UserList.scss";
import User from "./User";

import "./User.scss";

export default function UserList(props) {

  let listOfUsers = [];

  if(!props.users.users) {
    return "loading"
     }

  listOfUsers = props.users.users.forEach((user) => {
    <User
     key = {user.id}
     name = {user.name}
     picture = {user.picture}
     age = {user.age}
     gender = {user.gender}
     street_name = {user.street_name}
     city = {user.city}
     walk_reason = {user.walk_reason}
     walk_time = {user.walk_time}
     interests = {user.interests}
    />
  })



 
  console.log("all props:",listOfUsers)
  
    // const {name, picture, gender, age, street_name, city, walk_reason, walk_time, interests} = props.users.users[0]

  return (
    <Fragment>
      <img src="/images/userlist_topimg.jpg" className="top-image" />
      <div className="filter-section">
        <div className="filter-options">
          

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

          <button className="btn filter-button">Filter</button>
        </div>
      </div>
 
      {listOfUsers}

    </Fragment>
  );
}
