import React, { useState } from 'react';
import './Register.scss';

export default function Register(){
  
  const ages = ["20-40","40-60", "60-80"];
  const genders = ["Male","Female"];
  const reasons = ["Leisure", "Socializing", "Weight Loss", "Staying Fit",  "Walking my pet", "Taking my baby out on a stroll"];
  const times = ["Morning","Afternoon","Evening"];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [location, setLocation] = useState("");
  const [areacode, setAreacode] = useState("");
  const [reason, setReason] = useState("");
  const [time, setTime] = useState("");


  const handleSubmit = (e) =>{
    console.log(name);
    console.log(email);
    console.log(password);
    console.log(age);
    console.log(gender);
    console.log(location);
    console.log(areacode);
    console.log(reason);
    console.log(time);
  }
  
  return (
    <div>
      Register
      <div className="form">
        <form autoComplete="off"  onSubmit={event => event.preventDefault()}>
            <div className="form__group">
              <label>Name: </label>
              <input type="text" value={name} placeholder="Name" 
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="form__group">
              <label>Email:</label>
              <input type="email" value={email} placeholder="Email"      
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="form__group">
              <label>Password:</label>
              <input type="password" value={password} placeholder="Password "      
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
            <div className="form__group">
              <label>Location:</label>
              <input type="text" value={location} placeholder="Address"      
                onChange={(event) => setLocation(event.target.value)}
              />
            </div>
            <div className="form__group">
              <label>Area:</label>
              <input type="text" value={areacode} placeholder="Area Code"      
                onChange={(event) => setAreacode(event.target.value)}
              />
            </div>
            <label className="form__group">Preferences</label>
            < div className="form__group2">
              <div className="form__group">
                <label>Reason for Walk:</label>
                <select value={reason} onChange={(event) => setReason(event.target.value)}>
                  {reasons.map(reason => (<option key={reason}>{reason}</option>))}
                </select>  
              </div>
              <div className="form__group">
                <label>Time of Walk:</label>
                <select value={time} onChange={(event) => setTime(event.target.value)}>
                  {times.map(time => (<option key={time}>{time}</option>))}
                </select>  
              </div>
            </div>
            
        </form>
        <button type="button" className="btn" onClick={handleSubmit}>
            Register
        </button>
      </div> 
      
    </div>
  )
}