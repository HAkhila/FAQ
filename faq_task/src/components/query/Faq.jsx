import React from 'react'
import './Faq.css'
import search from '../../Images/Vector.png'

function Faq() {
  return (
    <div className='flex-container-Faq'>
      <div className="faqGradient"></div>
      <div className='theFaqCard'> The FAQs</div>
      <div className='theFaqHeading'>Have a Question? </div>
      <div className='query'>Search your query below.</div>
      <div className='formContainer'>
        <form action='' className='search-bar'>
          <input type="text" placeholder="Is there a free trail available" />
          <button type='submit'><img src={search} alt={search} /></button>
        </form>
      </div>
    </div>
  )
}

export default Faq;