import React from 'react'
import './MainData.css'
const MainData = () => {
  return (
    <section className='main-data-wrapper'>
      <div className='main-data'>
        <div className='main-data-sub1'>
          <div className='main-data-sub1a'>
            Grow your business with Bridge
          </div>
          <div className='main-data-sub1b'>
            Bridge provides cutting-edge ecommerce, business intelligence, and content solutions for the beverage alcohol industry.
          </div>
        </div>
        <div className='main-data-sub2'>
          <div className='main-data-sub2a'>
            Getting started is easy
          </div>
          <p className='main-data-sub2b'>
            Enter your information below to get a demo
          </p>
          <div className='main-data-sub2c'>
            <input id="full-name" className='input-field' placeholder='Full Name*' type='text'/>
            <input id="email" className='input-field' placeholder='Email*' type='email'/>
            <input id="company" className='input-field' placeholder='Company*' type='text'/>
            <button className='request-btn'>Reuest Demo</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainData