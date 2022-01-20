import React, { Fragment } from "react";
import useApplicationData from "../hooks/useApplicationData.js";

import "../styles/variables.scss";
import "./UserList.scss";
import User from "./User";

import "./User.scss";

export default function UserList(props) {
  const { state, dispatch } = useApplicationData();
  // console.log("users from state", state.users);
  console.log("STATE is userlist", props.location.state);

  if(!props.location.state.users) {
    return "loading"
     }

  const listOfUsers = props.location.state.users.map((user) => {
    if(user){
      // console.log("individual user", user);
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
          

          <select
            className="fbtn btn-primary dd-toggle"
           >
            <option disabled selected>Age</option>
            <option value="18-25">18-25</option>
            <option value="25-35">25-35</option>
            <option value="35-45">35-45</option>
            <option value="45-55">45-55</option>
            <option value="55-65">55-65</option>
            <option value="65+">65+</option>
          </select>

          <select
            className="fbtn btn-primary dd-toggle">
            <option disabled selected>Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          <select
            className="fbtn btn-primary dd-toggle">
            <option disabled selected>Time of Walk</option>
            <option value="Morning">Morning</option>
            <option value="Afternoon">Afternoon</option>
            <option value="Evening">Evening</option>
          </select>

          <select
            className="fbtn btn-primary dd-toggle">
            <option disabled selected>Reason of Walk</option>
            <option value="Leisure">Leisure</option>
            <option value="Socializing">Socializing</option>
            <option value="Weight Loss">Weight Loss</option>
            <option value="Staying Fit">Staying Fit</option>
            <option value="Walking my pet">Walking my pet</option>
            <option value="Taking my baby out on a stroll">Taking my baby out on a stroll</option>
          </select>

          <button className="fbtn">Filter</button>
        </div>
      </div>

 {listOfUsers}

    </Fragment>
  );
}
