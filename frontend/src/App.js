import "./App.css";
import useApplicationData from "./hooks/useApplicationData.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import { Switch } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import User from "./components/User";
import UserList from "./components/UserList";
import Chat from "./components/Chat";


const App = () => {
  const { state, dispatch } = useApplicationData();

  return (
    <Router>
      <div className="App">

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>

          <Route path="/UserList" render={(props) => <UserList {...props}/>}/>

          <Route path="/Chat">
            <Chat />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
