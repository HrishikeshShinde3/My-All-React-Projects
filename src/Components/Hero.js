import React from 'react'
import './Hero.css'
import './moving-img-animation.css'
import './left-container.css'
import Navbar from '../Navbar/Navbar'



 function Container1  () {
  return (
    <>
      <div className='Hero-mainContainer1'> 
       
      <div className='LeftContainer'>
        <div className='color-text'>
        <h1>We Think.We Make. </h1>
        <h1> We Solve.</h1>
        <h3>-What we do as Frontend Developer</h3>
        <h2>We enjoy creating delightful,human centered digital experiences & create effective front-end user interfaces.</h2>
        </div>
        <button1 className="button1">Learn more</button1>
      </div>
      <div >
         <img className='RightContainer' src="https://files.codingninjas.in/438375-17407.webp" alt='logo' ></img>
      </div>
     </div>
    </>
  )
}


export default function Hero() {
  return (
    <div className='Hero-Section'>
        <Navbar/>
        <Container1/>
    </div>
  )
}
