import React, { useState } from 'react';
import '../styles/variables.scss';
import './Login.scss';
import axios from 'axios';

export default function Login(){
  
  const [email, setEmail] =     useState("");
  const [password, setPassword] =useState("");

  const verify = (e) =>{
   console.log(email);
   console.log(password);

   const user = {email, password};

   axios.post('/api/users/login', user )
   .then(res => console.log(res.data));
   
  }

  return (
    
  
      <div className="login" id="login">

    <nav>
      <div className="content-left">
        <img src="/images/Logo.png" className="logo" />
       
          <div className="title">
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
          <input type="email" value={email} required name="email" placeholder = "Email Id" className="form-control" 
          onChange={(event) => setEmail(event.target.value)}
          />
        </div>

      
        <div className="form-password">
          <label>Password:</label>
          <input type="password" value={password} required name="password" placeholder = "Password" className="form-control" 
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