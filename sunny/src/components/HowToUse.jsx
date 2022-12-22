import React from 'react'
import { circle, howtouse } from '../assets'
import {AiOutlineLogout} from 'react-icons/ai'

const HowToUse = () => {
  return (
    <div className='container pt-20 my-3'>
      <div className="top flex justify-center relative items-center gap-[30rem] ">
        <div className="py-2">
        <p className='text-gray pb-4'>Why Choose Us ?</p>
        <h1 className='text-3xl'>How to use ? </h1>
        </div>
        <div className="flex flex-row m-3">
          <img src={circle} alt="circle" className=' w-[120px] ' />
          <div className="flex max-w-[200px] flex-col my-3 px-3 gap-4">
          <p className='text-[16px] font-light'>Dose not contain alcohol.</p>
          <p className='text-[21.4px]'>PH 3.5</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center text-start gap-10 flex-row ">
        <div className="flex">
          <img src={howtouse } alt="how to use" className='flex m-3 pt-10' />
        </div>
        <div className="flex flex-col max-w-[500px]">
          <h1 className='text-2xl my-5 font-medium'>Apply & Ingredients</h1>
          <p className='text-xl font-normal text-gray leading-8 my-2'>Give your face that gorgeous sun-kissed look with high-quality bronzers! Makeup city is a house to international brands that sell natural-looking bronzers. Bronzing is about giving your face the perfect dimension and warmth. </p>
          <p className='text-xl font-normal text-gray leading-8 my-2'>If you are looking for ways to warm up your pale skin, apply bronzer, and see the difference. Bronzer face seems the smart way to add glamour to your otherwise simplistic look.</p>
          <span className='flex flex-row justify-start items-center gap-6 text-primary my-2 py-2'>
            <a href="#" className='text-7xl'><AiOutlineLogout/></a>
            <h3 className='text-[18px]'>Learn More</h3>
          </span>
        </div>
      </div>
    </div>
  )
}

export default HowToUse