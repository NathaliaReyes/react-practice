import React from 'react';
import '../stylesheets/Testimony.css';



function Testimony(props) {
  return (
    <div className='testimony-container'>
      <img className='testimony-image' src={require(`../images/testimony-${props.image}.png`)} alt='image-user'/>
      <div className='text-testimony-container'>
        <p className='name-testimony'>{props.name} in {props.country}</p>
        <p className='role-testimony'>{props.role} at {props.company}</p>
        <p className='text-testimony'>"{props.testimony}"</p>
      </div>
    </div>
  )
}   

export default Testimony;