import React from 'react'
import {logo} from '../assets'
import {AiOutlineSend} from 'react-icons/ai'
import FooterMap from './FooterMap'


const Footer = () => {
  return (

    <footer id='contact' >
      <section className=' bg-slate-100 w-full flex flex-row justify-evenly items-center py-10'>
      <div className="flex justify-start flex-col items-start left-20 relative py-2">
         <img src={logo} alt="logo" className='m-2 py-2 ' />
         <p className='text-gray max-w-xs m-2 py-2 text-2xl font-light text-start'>Nor again is there anyone who loves or pursues or desires to obtain pain of itself.</p>
         <span className='flex flex-row justify-center items-center '>
         <input type="email" name="email" id="email" placeholder='Enter your e-mail' className='py-4 px-10 m-2 w-[290px] h-[70px] bg-black text-p_color' />          
         <AiOutlineSend  className='text-4xl w-10  relative right-16 px-2 cursor-pointer  bg-white'/>
         </span>
      </div>
         <div className='flex flex-col'>
           <FooterMap />
         </div>
      </section>
      <div className="flex border-t-2 justify-center gap-[30rem] mb-2 items-center  text-xl py-2 text-gray font-light ">
        <p>© Copyright 2021 .All rights reserved.</p>  
        <div className="flex justify-between gap-10">
         <a href="#">Contact Us</a>
         <a href="#">Terms</a>
        </div>
       </div>
    </footer>
  
  )
}

export default Footer 