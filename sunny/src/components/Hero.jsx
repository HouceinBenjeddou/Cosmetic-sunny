import React from 'react'
import { hdmicro, line, price, delivery } from '../assets'
const Hero = () => {
  return (
  <section id='home' className='container '>
    <div className=' w-full py-10  flex justify-between items-center relative '>
      <div className="container flex justify-center max-w-lg">
         <img src={line} alt='line' className='z-10 absolute left-0 right-[50%]'/>
         <img src={hdmicro} alt='hdmicro' className='z-40 relative -right-[600px] px-3 py-1 w-[510px] h-[660px]'/>
         <img src={price} alt='price' className='z-30 absolute right-[150px] bottom-[190px] '/>
      </div>
       

        <div className='container flex flex-col justify-center items-start absolute max-w-2xl left-24 p-2'>
          <div className='flex my-4 w-full'>
           <span className='flex flex-row w-[inherit] text-white bottom-16 relative px-4 '>
           <img src={delivery} alt="delivery" className='flex my-[1rem] items-center justify-center
            left-16 w-[22px] h-[20px] relative'/>
           <button className='rounded-3xl pl-20'>Free delivery Worldwide</button>
           </span>
          </div>

          <h1 className=" text-6xl px-4 bottom-16 relative max-w-[560px] m-3 ">Foundation Matte & poreless</h1>
          <p className='flex max-w-[23em] m-3 py-1 text-gray-500 px-4 -top-6 relative'>Maybelline’s #1 foundation perfect for oily skin. No stickiness, no shine.</p>
          <button>Add to Cart</button>
          <span>How it Works</span>
      </div> 

    </div>
  </section>
  )
}

export default Hero