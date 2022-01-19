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
  // const { state, dispatch } = useApplicationData();

  const [users, setUsers] = useState('')

  // const {picture, setPicture} = useState('')
  // const {email, setEmail} = useState('')
  // const {age, setAge} = useState('')
  // const {gender, setGender} = useState('')
  // const {}

//   useEffect(() => {
//     axios({
//             method: 'GET',
//             url: '/api/users',
//         })
//         .then((data) => {
//             console.log(data);

//         })
//         .catch((err) => console.log(err));
// }, []);


useEffect(() => {
  Promise.all([
    axios.get("/api/users"),
   ]).then((all) => {
    // console.log("retrived data",all[0].data);
    setUsers((prev) => ({
      ...prev, users: all[0].data
      }));
// console.log("Users data from DB:",users)
  });
}, []);
  

  // const users = state.users;

  // console.log("what is inside state.users?", users)
  // const userList = state.users.map((user) => (
  //   <ul key={user.id}>
  //     <li>{user.name} </li>
  //     <li>{user.picture}</li>
  //     <li>{user.email}</li>
  //     <li>{user.age}</li>
  //     <li>{user.gender}</li>
  //     <li>{user.street_name}</li>
  //     <li>{user.city}</li>
  //     <li>{user.walk_reason}</li>
  //     <li>{user.walk_time}</li>
  //     <li>{user.interests}</li>
  //   </ul>
  // ));

  // <h1> Users </h1>
  // <ul> {userList} </ul>
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

          <Route path="/UserList">
            <UserList users={users} />
          </Route>

          <Route path="/Chat">
            <Chat />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
