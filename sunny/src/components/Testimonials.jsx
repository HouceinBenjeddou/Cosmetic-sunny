import React from 'react'
import { useState } from 'react'
import { testimonials } from '../constants'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const {image, header, story, author, position} = testimonials[index];

  const checkPerson = (number) => {
    if(number > testimonials.length - 1){
      return 0;
    }
    else if(number < 0){
      return testimonials.length - 1;
    }
    return number;
  };

  const prevPerson = () =>{
    setIndex((index) => {
      let newIndex = index +1 
      return checkPerson(newIndex); 
    })
  }
  const nextPerson = () =>{
    setIndex((index) => {
      let newIndex = index - 1;
      return checkPerson(newIndex);
    })
  }

  return (
    <section id='about'>
    <div className='flex justify-center items-center text-4xl mt-2 py-6 font-medium top-16 relative'>
      <h1 className='my-3 py-4'>What Our Customers Are Saying About Us</h1>
    </div>
    <div className='flex justify-center items-center container gap-20 py-8 relative top-9'>
      <div className="flex flex-row justify-center items-center">
        <img src= {image} alt={author} className="ml-4 w-[300px] h-[440px] border rounded-lg "/>
      </div>
      <div className="flex flex-col max-w-[550px] justify-center items-start">
      <h2 className='text-2xl font-normal my-2 self-center text-primary '>Customer Story</h2>
        <h1 className='text-3xl my-2 font-medium '>{header}</h1>
        <q className='text-gray text-lg my-2 leading-8'>{story}</q>
        <h3 className='font-light my-2 p-0 '>- {author}</h3>
        <h4 className='flex justify-start items-start'>{position}</h4>
          <div className=" flex self-center text-[32px] py-4 cursor-pointer justify-between gap-10">
            <AiOutlineArrowLeft onClick={prevPerson}  className="hover:scale-125"/>
            <AiOutlineArrowRight onClick={nextPerson} className="hover:scale-125" />
          </div>
      </div>
    </div>
    
    </section>
  )
}

export default Testimonials