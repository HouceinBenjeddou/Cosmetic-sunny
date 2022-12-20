import React from 'react'
import { hdmicro, line, price, delivery } from '../assets'
import {BiSkipNextCircle} from 'react-icons/bi'
const Hero = () => {
  return (
  <section id='home' className='container '>
    <div className=' w-full py-1 flex justify-between items-center relative '>
      <div className="container flex justify-center max-w-lg">
         <img src={line} alt='line' className=' absolute left-0 right-[50%]'/>
         <img src={hdmicro} alt='hdmicro' className='z-40 relative -right-[600px] px-3 py-1 w-[510px] h-[660px]'/>
         <img src={price} alt='price' className='z-30 absolute right-[150px] bottom-[190px] '/>
      </div>
        <div className='flex flex-col items-start absolute max-w-2xl left-24 p-2'>
          <div className='flex my-4 w-full'>
           <span className='flex flex-row w-[inherit] text-p_color bottom-16 relative px-4 right-1 '>
           <img src={delivery} alt="delivery" className='flex my-[1rem] items-center justify-center
            left-16 w-[22px] h-[20px] relative'/>
           <button className='rounded-3xl pl-20 bg-[#FCC7C3] '>Free delivery Worldwide</button>
           </span>
          </div>
          <h1 className=" text-6xl px-4 bottom-16 relative max-w-[560px] m-3 ">Foundation Matte & poreless</h1>
          <p className='flex max-w-[23em] mx-2 py-1 text-gray pl-[21.5px] -top-6 relative'>Maybelline’s #1 foundation perfect for oily skin. No stickiness, no shine.</p>
          <span className='flex flex-1 flex-row justify-between mx-3 gap-6 items-center relative -left-[17px]'>
          <button className='flex cursor-pointer text-p_color relative left-3 px-4 m-3 '>Add to Cart</button>        
          <p className='flex flex-col text-gray text-lg  cursor-pointer'>How it works</p>
          <span className='text-3xl cursor-pointer my-2 right-2 relative'><BiSkipNextCircle/></span>
          </span>
         
      </div> 

    </div>
  </section>
  )
}

export default Hero