import React from 'react'
import { hdmicro, line, price, delivery } from '../assets'
const Hero = () => {
  return (
  <section id='home' className='container mx-auto '>
    <div className=' w-full py-10  flex justify-between items-center relative '>
      <div className="container flex justify-center max-w-lg">
      <img src={line} alt='line' className='z-10 w-full object-cover bg-no-repeat h-96 flex center
        flex-1 '/>

        <img src={hdmicro} alt='hdmicro' className='z-40 absolute ml-6 -right-[100px] px-3 py-1 w-[510px] h-[660px]
        '/>
        <img src={price} alt='price' className='z-30 initial
         right-[150px] bottom-[190px] '/>
      </div>
       {/*
        <div className='relative left-8 flex flex-col '>
        <span>
        <img src={delivery} alt="delivery"/>
        <button>Free delivery Worldwide</button>
        </span>
          <h1>Foundation & Matte</h1>
          <p>Maybelline’s #1 foundation perfect for oily skin. No stickiness, no shine.</p>
          <button>Add to Cart</button>
          <span>How it Works</span>
      </div>  */}
    </div>
  </section>
  )
}

export default Hero