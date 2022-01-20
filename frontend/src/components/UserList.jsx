import React, { Fragment } from "react";
import { useState } from "react";
// import useApplicationData from "../hooks/useApplicationData.js";

import "../styles/variables.scss";
import "./UserList.scss";
import User from "./User";

import "./User.scss";

export default function UserList(props) {
  // const { state, dispatch } = useApplicationData();

  // const ages = ['Age','18-25','25-35','35-45','45-55','55-65','65+'];
  // const genders = ['Gender','Male', 'Female'];
  // const times = ['Time of Walk','Morning', 'Afternoon', 'Evening']
  // const reasons = ['Reason of Walk','Leisure', 'Socializing','Weight Loss', 'Staying Fit', 'Walking my pet', 'Taking my baby out on a stroll' ]

  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [time, setTime] = useState("");
  const [reason, setReason] = useState("");

   if (!props.location.state.users) {
    return "loading";
  }

  const listOfUsers = props.location.state.users.map((user) => {
    if (user ) {
      return (
        <User
          key={user.id}
          name={user.name}
          picture={user.picture}
          age={user.age}
          gender={user.gender}
          street_name={user.street_name}
          city={user.city}
          walk_reason={user.walk_reason}
          walk_time={user.walk_time}
          interests={user.interests}
        />
      );
    }
  });


  return (
    <Fragment>
      <nav>
        <div class="content-left">
          <img src="/images/Logo.png" class="logo" />

          <div class="title">
            <span>Walking Buddies</span>
          </div>
        </div>
        <div class="content-right">
          <a href="/login">
            <button
              type="button"
              class="btn btn-dark"
              data-mdb-ripple-color="dark"
            >
              <span>Login</span>
            </button>
          </a>
          <a href="/register">
            <button
              type="button"
              class="btn btn-dark"
              data-mdb-ripple-color="dark"
            >
              <span>Register</span>
            </button>
          </a>
        </div>
      </nav>
      <img src="/images/userlist_topimg.jpg" className="top-image" />
      <div className="filter-section">
        <div className="filter-options">
          {/* <select
            className="fbtn btn-primary dd-toggle"
            value={ages} onChange={(event) => {setAge(event.target.value)
              console.log(age)}}>
            {ages.map(age => (<option key={age}>{age}</option>))}
          </select> */}

          {/* <select
            className="fbtn btn-primary dd-toggle"
            value={genders} onChange={(event) => {setGender(event.target.value)
              console.log(event.target.value)}}>
                <option disabled selected>Gender</option>
            {genders.map(gender => <option key={gender}>{gender}</option>)}
          </select> */}

          <select
            className="fbtn btn-primary dd-toggle"
            onChange={(event) => setAge(event.target.value)}
          >
            <option disabled selected>
              Age
            </option>
            <option value="18-25">18-25</option>
            <option value="25-35">25-35</option>
            <option value="35-45">35-45</option>
            <option value="45-55">45-55</option>
            <option value="55-65">55-65</option>
            <option value="65+">65+</option>
          </select>

          <select
            className="fbtn btn-primary dd-toggle"
            onChange={(event) => setGender(event.target.value)}
          >
            <option disabled selected>
              Gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          <select
            className="fbtn btn-primary dd-toggle"
            onChange={(event) => setTime(event.target.value)}
          >
            <option disabled selected>
              Time of Walk
            </option>
            <option value="Morning">Morning</option>
            <option value="Afternoon">Afternoon</option>
            <option value="Evening">Evening</option>
          </select>

          <select
            className="fbtn btn-primary dd-toggle"
            onChange={(event) => {
              setReason(event.target.value);
              console.log(event.target.value);
            }}
          >
            <option disabled selected>
              Reason of Walk
            </option>
            <option value="Leisure">Leisure</option>
            <option value="Socializing">Socializing</option>
            <option value="Weight Loss">Weight Loss</option>
            <option value="Staying Fit">Staying Fit</option>
            <option value="Walking my pet">Walking my pet</option>
            <option value="Taking my baby out on a stroll">
              Taking my baby out on a stroll
            </option>
          </select>

          <button className="fbtn">Filter</button>
        </div>
      </div>

      {listOfUsers}
    </Fragment>
  );
}
