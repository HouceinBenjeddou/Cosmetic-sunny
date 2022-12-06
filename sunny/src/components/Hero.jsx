import React from 'react'
import { hdmicro, line, price, delivery } from '../assets'
const Hero = () => {
  return (
    <section id='home'>
    <div className='py-10 mx-auto flex justify-evenly items-center flex-col  '>
      <div className="container flex justify-center max-w-lg">
      <img src={line} alt='line' className='z-10 w-[1500px] h-96 flex '/>

        <img src={hdmicro} alt='hdmicro' className='z-40 absolute '/>
        <img src={price} alt='price' className='z-30'/>
      </div>
       <div className="">
        <button>Free delivery Worldwide</button>
        <img src={delivery} alt="delivery"/>
          <h1>Foundation & Matte</h1>
          <p>Maybelline’s #1 foundation perfect for oily skin. No stickiness, no shine.</p>
          <button>Add to Cart</button>
          <span>How it Works</span>
      </div> 
    </div>
    </section>
  )
}

export default Hero