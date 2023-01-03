import React from 'react'
import './support.css'
import hand from '../../Images/Hand.png'


function support() {
  return (
    <div className='flex-container-SupportCard'>
      <div className='helpCardHeading'>Tell us how we can help you  <img className='hand' src={hand} alt={hand}/>
        <div className='helpHeadingContainer'>Chat with our team for furthur assessment.</div>
        <button type='submit'className='support'>Support</button>
      </div>
    </div>
  )
}

export default support;