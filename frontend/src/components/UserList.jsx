import React, { Fragment } from "react";

import "../styles/variables.scss";
import "./UserList.scss";
import User from "./User";

import bgimage from "../images/backgroundimg3.jpg";

import "./User.scss";

export default function UserList() {
  return (
    <Fragment>
      <img src="/images/userlisttopimg.jpg" className="top-image" />
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

      <User />
    </Fragment>
  );
}
