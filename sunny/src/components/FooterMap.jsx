import React from 'react'
import { aboutFooter, privacyFooter, contactFooter } from '../constants'
import {AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare} from 'react-icons/ai'

const FooterMap = () => (
  <div className='flex flex-row gap-20'>
      <div className="flex items-start flex-col py-2 mx-4">
    {
      aboutFooter.map((index) =>(
        <div key={index.id}>
            <h1 className='text-2xl text-links  font-normal text-start py-2'>{index.title}</h1>
          <a href="#" className='text-[18px] text-gray  text-start my-2' >{index.links}</a>
        </div>
      ))
    }
    </div>
    <div className="flex items-start flex-col py-2 mx-4">
    {
      privacyFooter.map((index) =>(
        <div key={index.id}>
            <h1 className='text-2xl text-links  font-normal text-start py-2'>{index.title}</h1>
          <a href="#" className='text-[18px] text-gray  text-start my-2' >{index.links}</a>
        </div>
      ))
    }
    </div>
    <div className="flex items-start flex-col py-2 mx-4">
    {
      contactFooter.map((index) =>(
        <div key={index.id}>
            <h1 className='text-2xl text-links  font-normal text-start py-2'>{index.title}</h1>
          <p className='cursor-default text-[18px] text-gray text-start my-0' >{index.links}</p>
        </div>
      ))
    }
    <div className="flex flex-row justify-center items-start text-3xl gap-5 relative pt-12 m-0">
          <a href="#"><AiFillFacebook/></a>   
          <a href="#"><AiFillInstagram/></a>   
          <a href="#"><AiFillLinkedin/></a>   
          <a href="#"><AiFillTwitterSquare/></a>   
         </div>

    </div>
    
  </div>
)

export default FooterMap