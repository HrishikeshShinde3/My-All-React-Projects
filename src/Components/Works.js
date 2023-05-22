import React from 'react'
import './Works.css'






 function Container1  () {
  return (
    <>
      <div className='Works-mainContainer'> 
       
      <div className='Works-LeftContainer'>
        <h1 className='h1'>Web Design</h1>
        <h1>Development</h1>
        <h1>Product Design</h1>
        <h1>App Design</h1>
        <h1>Social Media</h1>
      </div>
      <div  className='Works-RightContainer'>
      

      </div>
     </div>
    </>
  )
}


export default function Who() {
  return (
    <div className='Works-Section'>
        
        <Container1/>
    </div>
  )
}
