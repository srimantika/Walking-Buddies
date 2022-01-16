import React, { useState } from 'react';
import './Register.scss';

export default function Register(){
  
  const ages = ["20-40","40-60", "60-80"];
  const genders = ["Male","Female"];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");


  const handleSubmit = (e) =>{
    console.log(name);
    console.log(email);
    console.log(password);
    console.log(age);
    console.log(gender);
  }
  
  return (
    <div>
      Register
      <div className="form">
        <form autoComplete="off"  onSubmit={event => event.preventDefault()}>
            <div className="form__group">
              <label>Name: </label>
              <input type="text" value={name} placeholder="Enter Name" 
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="form__group">
              <label>Email:</label>
              <input type="email" value={email} placeholder="Enter Email"      
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="form__group">
              <label>Password:</label>
              <input type="password" value={password} placeholder="Enter Password "      
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="form__group">
              <label>Age:</label>
              <select value={age} onChange={(event) => setAge(event.target.value)}>
                {ages.map(age => (<option key={age}>{age}</option>))}
              </select>  
            </div>
            <div className="form__group">
              <label>Gender:</label>
              <select value={gender} onChange={(event) => setGender(event.target.value)}>
                {genders.map(gender => (<option key={gender}>{gender}</option>))}
              </select>  
            </div>
        </form>
        <button type="button" className="btn" onClick={handleSubmit}>
            Register
        </button>
      </div> 
      
    </div>
  )
}