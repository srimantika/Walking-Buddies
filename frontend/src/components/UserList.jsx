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
  <button className='btn'>Filter</button>
  <div className='options-section'>
    <button>
      Age
    </button>
    <button>
     Gender
    </button>
    <button>
      Time of Walk
    </button>
    <button>
      Reason of Walk
    </button>
  </div>
</div>

<User />
    </Fragment>

  )
}