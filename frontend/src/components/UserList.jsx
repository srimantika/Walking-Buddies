import React, { Fragment } from "react";
import { useState, useEffect } from "react";

import "../styles/variables.scss";
import "./UserList.scss";
import User from "./User";

import "./User.scss";

export default function UserList(props) {
  const [chat, setChat] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState("");

  useEffect(() => {
    setLoggedInUser(localStorage.getItem("name"));
  });

  const filterState = {
    age: "",
    gender: "",
    walk_reason: "",
    walk_time: "",
  };
  const [users, setUsers] = useState([]);
  const [filterObject, setfilterObject] = useState(filterState);

  const clickHandler = () => {
    setChat(true);
  };

  useEffect(() => {
    if (!props.location.state.users) {
      return "loading";
    }
    setUsers(props.location.state.users);
  }, []);

  // useEffect(() => {
  //   const usersCopy = [...props.location.state.users]
  //   const filteredUsers = usersCopy.filter((user) => {
  //     if(user.age) {
  //       return user.age === age
  //     }
  //   })
  //   console.log("usersCopy:",usersCopy)
  //   console.log("filteredUsers:",filteredUsers);
  //   setUsers(filteredUsers);
  //   console.log("users:",users)
  // },[age])

  // useEffect(() => {
  //   if(age) {
  //     const userslist = gender
  //     ? users.filter((user) => {
  //         return user.age === age;
  //       })
  //     : props.location.state.users;
  //   }

  //   if(gender) {
  //     const userslist = gender
  //     ? users.filter((user) => {
  //         return user.gender === gender;
  //       })
  //     : props.location.state.users;
  //   }

  //   if(time) {
  //     const userslist = gender
  //     ? users.filter((user) => {
  //         return user.walk_time === time;
  //       })
  //     : props.location.state.users;
  //   }

  // })

  const setFilterItem = (event, type) => {
    if (type === "Age") {
      const newfilterObj = {
        ...filterObject,
        age: event.target.value,
      };
      setfilterObject(newfilterObj);
    }
    if (type === "Gender") {
      const newfilterObj = {
        ...filterObject,
        gender: event.target.value,
      };
      setfilterObject(newfilterObj);
    }
    if (type === "Time") {
      const newfilterObj = {
        ...filterObject,
        walk_time: event.target.value,
      };
      setfilterObject(newfilterObj);
    }
    if (type === "Reason") {
      const newfilterObj = {
        ...filterObject,
        walk_reason: event.target.value,
      };
      setfilterObject(newfilterObj);
    }
  };

  var userslist = props.location.state.users;
  ["age", "gender", "walk_time", "walk_reason"].forEach(function (filterBy) {
    console.log("filterobject:", filterObject);
    let filterValue = filterObject[filterBy];
    console.log("filtervalue:", filterValue);
    if (filterValue) {
      userslist = userslist.filter(function (item) {
        return item[filterBy] === filterValue;
      });
    }
  });

  const areaCode = userslist[0].postal_code.slice(0, 3);
  const userCity = userslist[0].city;
  console.log("areacode", areaCode);
  const renderedUsers = userslist.map((user) => {
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
        currentUserName={props.location.state.name}
        currentUserPassword={props.location.state.password}
      />
    );
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
          <span className="message-of-area-code">Hi {loggedInUser}!</span>
          <a href="/Chat" target="_blank">
            <img
              className="chaticon"
              src="./images/Chaticon.png"
              onClick={clickHandler}
            />
          </a>
          <a href="/login">
            <button
              type="button"
              class="btn btn-dark"
              data-mdb-ripple-color="dark"
            >
              <span>Logout</span>
            </button>
          </a>
        </div>
      </nav>
      <img src="/images/userlist_topimg.jpg" className="top-image" />
      <div className="filter-section">
        <div className="filter-options">
          <select
            className="fbtn btn-primary dd-toggle"
            onChange={(event) => setFilterItem(event, "Age")}
          >
            <option value="">Age</option>
            <option value="18-25">18-25</option>
            <option value="25-35">25-35</option>
            <option value="35-45">35-45</option>
            <option value="45-55">45-55</option>
            <option value="55-65">55-65</option>
            <option value="65+">65+</option>
          </select>

          <select
            className="fbtn btn-primary dd-toggle"
            onChange={(event) => setFilterItem(event, "Gender")}
          >
            <option value="">Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          <select
            className="fbtn btn-primary dd-toggle"
            onChange={(event) => setFilterItem(event, "Time")}
          >
            <option value="">Time of Walk</option>
            <option value="Morning">Morning</option>
            <option value="Afternoon">Afternoon</option>
            <option value="Evening">Evening</option>
          </select>

          <select
            className="fbtn btn-primary dd-toggle"
            onChange={(event) => {
              setFilterItem(event, "Reason");
            }}
          >
            <option value="">Reason of Walk</option>
            <option value="Leisure">Leisure</option>
            <option value="Socializing">Socializing</option>
            <option value="Weight Loss">Weight Loss</option>
            <option value="Staying Fit">Staying Fit</option>
            <option value="Walking my pet">Walking my pet</option>
            <option value="Taking my baby out on a stroll">
              Taking my baby out on a stroll
            </option>
          </select>

        </div>
      </div>
      <p className="message-of-area-code">
        Your walking buddies in the neighbourhood of {areaCode}, {userCity}
      </p>
    
      {renderedUsers}
    </Fragment>
  );
}
