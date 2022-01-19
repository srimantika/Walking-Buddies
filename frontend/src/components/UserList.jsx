import React, { Fragment } from "react";

import "../styles/variables.scss";
import "./UserList.scss";
import User from "./User";

import "./User.scss";

export default function UserList(props) {

  if(!props.users) {
    return "loading"
     }

  const listOfUsers = props.users.map((user) => {
    if(user){
      console.log("individual user", user);
      return <User
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
    }

  })

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
