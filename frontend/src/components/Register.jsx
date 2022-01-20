import React, { useState } from 'react';
import Checkbox from './Checkbox';
import axios from 'axios';
import { Redirect } from 'react-router';


import './Register.scss';

export default function Register(){
  
  const ages = ["20-40","40-60", "60-80"];
  const genders = ["Male","Female"];
  const reasons = ["Leisure", "Socializing", "Weight Loss", "Staying Fit",  "Walking my pet", "Taking my baby out on a stroll"];
  const times = ["Morning","Afternoon","Evening"];
  const interests= ["Games 🎮", "Music 🎵", "Movies 🎬", "Reading 📚","Sports ⚽",
                    "Food & Drinks ☕", "Arts 🎨","Politics 🤵",
                    "Travel 🌎", "Fashion 👗", "Fitness 🏋️‍♂️",
                    "Technology 💻 ", "Automobiles 🚗","Gardening 🌳"];

                    

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [areacode, setAreacode] = useState("");
  const [reason, setReason] = useState("");
  const [time, setTime] = useState("");
  const interest=[];
  const [selectedImage, setSelectedImage] = useState( 
    {profileImg:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'});
  const [checkedItems, setCheckedItems] = useState({}); //plain object as state

  const [register, setRegister] = useState('');

  let newUser = {};
  const handleChange = (event) => {
     setCheckedItems({...checkedItems, [event.target.name] : event.target.checked });
  }

    const imageHandler = (e) => {
      const reader = new FileReader();
      reader.onload = () =>{
        if(reader.readyState === 2){
          setSelectedImage({profileImg: reader.result})
        }
      }
      reader.readAsDataURL(e.target.files[0])
    };

  const handleSubmit = (e) =>{
    // console.log(name);
    // console.log(email);
    // console.log(password);
    // console.log(age);
    // console.log(gender);
    // console.log(street);
    // console.log(city);
    // console.log(areacode);
    // console.log(reason);
    // console.log(time);
    // console.log(selectedImage.profileImg);

    for (let key in checkedItems ){
      if (checkedItems[key]===true){
        interest.push(key);
      }
    }
    
    newUser = {name:name, picture:selectedImage.profileImg, email:email, password:password, age:age, gender:gender, street_name: street, city:city, postal_code:areacode, walk_reason:reason, walk_time: time, interests:interest.join()}

    axios.post('/api/users/add', newUser)
    .then(res =>{
      console.log(res.data.msg);
      setRegister(res.data.msg);}
    );

  }

  const { profileImg}=selectedImage;
  
  return (
  <div className="container_register">
     <nav>
      <div class="content-left">
        <img src="/images/Logo.png" class="logo" />
       
          <div class="title">
            <span>Walking Buddies</span>
          </div>
       
      </div>
      <div class="content-right">
          <a href="/login">
            <button type="button" class="btn btn-dark" data-mdb-ripple-color="dark">
              <span>Login</span>
            </button>
          </a>
         
      </div>

    </nav>

   

  
    {register.startsWith("Registered") && <Redirect to={{pathname: '/Login',  state:{}}} />}
    
    
    <div  className="container_register2">
    {register.startsWith("Sorry") && <h4>{register}!</h4>}
          <form className="register_form" autoComplete="off"  onSubmit={event => event.preventDefault()}>
            
            <div className="group1">
            <div className="main_profile">
              <div className="group">
                <label>Name: </label>
                <input type="text" required value={name} placeholder="Name" required
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div className="group">
                <label>Email:</label>
                <input type="email" required value={email} placeholder="Email"  required    
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              
              <div className="group">
                <label>Password:</label>
                <input type="password" required value={password} placeholder="Password "  required    
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <div className="group">
                <label>Age:</label>
                <select value={age} required onChange={(event) => setAge(event.target.value)}>
                  {ages.map(age => (<option key={age}>{age}</option>))}
                </select>  
              </div>
              <div className="group">
                <label>Gender:</label>
                <select value={gender} required onChange={(event) => setGender(event.target.value)}>
                  {genders.map(gender => (<option key={gender}>{gender}</option>))}
                </select>  
              </div>
              <div className="group">
                <label>Adress:</label>
                <input id="street" type="text" required value={street} placeholder="Street Name"      
                  onChange={(event) => setStreet(event.target.value)}
                />
                <input id="city" type="text" required value={city} placeholder="City"      
                  onChange={(event) => setCity(event.target.value)}
                />
              </div>
              <div className="group">
                <label>Postal Code:</label>
                <input type="text" required value={areacode} placeholder="Postal Code"      
                  onChange={(event) => setAreacode(event.target.value)}
                />
              </div>
            </div>

            
              
            
				<div className="image-container">
					{/* <h3 className="image-heading">Add your Image</h3> */}
					<div className="img-holder">
						<img src={profileImg} alt="" id="img" className="img" />
					</div>
					<input type="file" required accept="image/*" name="image-upload" id="image-input" onChange={imageHandler} />
					<div className="image-label">
          <label className="btn" htmlFor="image-input">
						{/* <i className="material-icons">add_photo_alternate</i> */}
						<span>Upload a Picture</span>
					</label>
          </div>
			  </div>
      </div>

      <label className="preference"> <b>Preferences</b></label>
            < div className="group2">
        
              <div className="space2">
                <label>Reason for Walk:</label>
                <select value={reason} onChange={(event) => setReason(event.target.value)}>
                  {reasons.map(reason => (<option key={reason}>{reason}</option>))}
                </select>  
              </div>
              <div className="space2">
                <label>Time of Walk:</label>
                <select value={time} onChange={(event) => setTime(event.target.value)}>
                  {times.map(time => (<option key={time}>{time}</option>))}
                </select>  
              </div>
            </div>

         <label className="preference"><b>Interest</b> </label>
          <div className="group3">
               {
              interests.map(item => (
                  <label key={item}>
                      <Checkbox name={item} checked={checkedItems[item]} onChange={handleChange} />
                      <span>{item}</span>
                  </label>
              ))
          }
          </div>
        </form>

      
      <button type="button" className="btn" onClick={handleSubmit}>
         <span>Register</span>
      </button>

    </div>
    
  </div>
  )
}