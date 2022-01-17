import React, { Fragment } from 'react'

import '../styles/variables.scss'
import './UserList.scss'
import User from './User'

import bgimage from '../images/backgroundimg3.jpg'

import "./User.scss";

export default function UserList(){

  return (
    <Fragment>
<img 
 src={bgimage}
 className='top-image'
/>
<div className='filter-section'>
  
  <div className='filter-options'>
  <button className='btn'>Filter</button>
    <button className='btn btn-filter'>
      Age
    </button>
    <button className='btn btn-filter'>
     Gender
    </button>
    <button className='btn btn-filter'>
      Time of Walk
    </button>
    <button className='btn btn-filter'>
      Reason of Walk
    </button>
  </div>
</div>

<User />
    </Fragment>

  )
}