import React from 'react'
import { useState } from 'react'
import {Faq} from '../constants'
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'

function Toggle() {
  const [toggle, setToggle] = useState(true);
 
}

const Faqs = (({question, answer}) =>(
  <div className="shadow-xl relative grid grid-rows-3 p-1 m-2 gap-5">
    <div className="p-3 inline-block relative outline-none">
      <span className='flex flex-row justify-center items-center'>
        <AiOutlinePlus className='text-5xl mr-2 cursor-pointer' onClick={Toggle()}/>
        <AiOutlineMinus className='hidden text-5xl mr-2 cursor-pointer' onClick={Toggle()}/>
      <h2 className='mx-2 my-1 py-3 text-2xl font-normal'>{question}</h2>
      </span>
    <p className='py-2 mx-2 hidden pb-3 absolute text-start'>{answer}</p>
    </div>
  </div>
)) 

const FAQ = () => {
  return (
    <section id='FAQ' className='py-10'>
      <div className="text-3xl flex justify-center items-end m-3 py-5">
        <h1>Frequently Ask Questions</h1>
      </div>
      <div className="grid grid-cols-3 m-3 gap-3 py-2">
      {
          Faq.map((question, index) => (
            <Faqs key={question.id} {...question} index={index}/>
          ))
        }
      </div>
       
    </section>
  )
}

export default FAQ