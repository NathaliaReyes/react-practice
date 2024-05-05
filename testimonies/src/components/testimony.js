import React from 'react';

function Testimony() {
  return (
    <div className='testimony-container'>
      <img className='tstimony-image' src={require('../images/1.png')} alt='image-user'/>
      <div className='text-testimony-container'>
        <p className='name-testimony'>Shawn Wang in Singapore</p>
        <p className='role-testimony'>Software Engineer at Amazon</p>
        <p className='text-testimony'>"It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."</p>
      </div>
    </div>
  )
}   

export default Testimony;