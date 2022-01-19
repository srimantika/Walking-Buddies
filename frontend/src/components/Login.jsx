import React, { useState } from 'react';
import '../styles/variables.scss'
import './Login.scss'
import useApplicationData from '../hooks/useApplicationData';
import axios from 'axios';


export default function Login(){

  const { state, dispatch } = useApplicationData();
 
  const [email, setEmail] =     useState("");
  const [password, setPassword] =useState("");

  const verify = (e) =>{
    console.log(email);
    console.log(password);
 
    const user = {email, password};
 
    axios.post('/api/users/login', user )
    .then(res => {
      console.log(res.data);
      state.currentUserEmail = res.data.user_email;
      state.currentUserPostalcode = res.data.postal_code;
      console.log("STATE",state);
    }
    );
   }
 

  return (
    
  
      <div class="login" id="login">

    <nav>
      <div class="content-left">
        <img src="/images/Logo.png" class="logo" />
       
          <div class="title">
            <span>Walking Buddies</span>
          </div>
       
      </div>

    </nav>
    <div>
      <h4>Welcome back ! Login to find your walking Buddy !</h4>
    </div>

      <form className="login-form" autoComplete="off"  onSubmit={event => event.preventDefault()}>
       
        <div className="form-username">
          <label> Email:</label>
          <input type="email" value={email} required name="email" placeholder = "Email Id" class="form-control" 
          onChange={(event) => setEmail(event.target.value)}
          />
        </div>

      
        <div className="form-password">
          <label>Password:</label>
          <input type="password" value={password} required name="password" placeholder = "Password" class="form-control" 
          onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <button
          type="button"
          id="submitbutton"
          className="btn-dark"
          onClick= {verify}>
           Sign in
      </button>
       <footer><span>© 2022 by Walking Buddies. All rights reserved.</span></footer>
      </form>

     
    </div>
  
  )
}