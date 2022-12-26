import React, { useState } from 'react'
import {navLinks} from '../constants'
import {logo} from '../assets'
import {AiOutlineShoppingCart, AiOutlineUser, AiOutlineSearch} from 'react-icons/ai'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Navbar = () => {
const [toggle, setToggle] =  useState(false)
const [darkMode, setDarkMode] = useState(false)
  return (    
    <div className='relative w-full flex py-6 px-6 mx-auto gap-48 items-center justify-center'>
      <div className="flex cursor-pointer">
        <img src={logo} alt='logo' className='flex-1 justify-center'/>
      </div>
      <div className=' flex items-center justify-around gap-20 '>
      {
        navLinks.map((item) =>{
          return (
            <div key={item.id}>
              <li className='flex flex-1 list-none items-center'>
                <ul className='hidden sm:flex sm:w-auto items-center '>
                <a href={`#${item.id}`} className='items-center mb-1 mt-1 hover:text-primary'>
                {item.title}
                </a>
                </ul>        
              </li>
            </div>
          )
        })
      }
      {/* 
      
      </div>
      
      <div className="items-center flex">
        <span className='object-contain hidden max-sm:flex cursor-pointer text-3xl' onClick={() => setToggle(!toggle)}>
        {toggle ? <RiCloseLine/> : <RiMenu3Line/>}
        </span>
      </div>

      <div className={`${
        !toggle ? "hidden" : "flex "
      }
      
      `}>
        {
        navLinks.map((item) =>{
          return (
            <div key={item.id}>
              <li className=' flex list-none items-center'>
                <ul className='flex items-center '>
                <a href={`#${item.id}`} className='items-center mb-1 mt-1 hover:text-primary'>
                {item.title}
                </a>
                </ul>        
              </li>
            </div>
          )
        })
      }
      */}
      </div>
    
    <div className='flex justify-end items-center gap-5 text-xl'>
      <ul className='flex-1'>
        <a href="#"><AiOutlineSearch /></a>
      </ul>
      <ul className='flex-1'>
        <a href="#"><AiOutlineShoppingCart /></a>
      </ul>
      <ul className='flex-1'>
        <a href="#"><AiOutlineUser /></a>
      </ul>
    </div> 
    </div>
  )
} 

export default Navbar