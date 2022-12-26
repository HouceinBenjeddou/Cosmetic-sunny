import React from 'react'
import {abstract, cta} from '../assets'
const CTA = () => {
  return (
   <section>
    <div className='flex py-16  justify-center items-center'>
     <div className="relative py-10 flex justify-center items-center">
      <img src={abstract} alt="" className='relative mx-2 my-1 py-2'/>
      <img src={cta} alt="CTA" className='absolute w-[100px] top-3 left-[58%]'/>
      <div className="inline-block right-[50%] absolute justify-start px-2 mx-1">
        <h1 className='text-4xl font-medium m-2 text-cta left-6 relative'>Enough talk, let's make you look beautiful</h1>
        <p className=' text-xl text-p_color font-light max-w-[30rem] m-2 left-6 relative'>There are many variations of passages of lorem Ipsum available, but the</p>
      </div>
      <div className="absolute right-24 text-p_color text-xl m-2 pt-10">
        <button>Get Started</button>
      </div>
     </div>
    </div>
   </section>
  )
}

export default CTA