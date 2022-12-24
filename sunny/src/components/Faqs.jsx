import React from 'react'
import { useState } from 'react'
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'

const Faqs = ({question,answer}) => {
const [toggle, setToggle] = useState(false);

return (
    <div className="shadow-xl grid grid-rows-3 p-1 m-2 gap-5">
    <div className="p-3 relative h-0">
        
      <span className='flex flex-row justify-center items-center text-4xl cursor-pointer ' onClick={()=>setToggle(!toggle)}>
        {toggle ? <AiOutlineMinus /> : <AiOutlinePlus/> }
       <h2 className='mx-2 my-1 py-3 text-2xl font-normal'>{question}</h2>
       </span>
      {toggle  &&  <p className='leading-8 py-2 mx-2 pb-3 absolute text-start'>{answer}</p> }
    </div>
  </div>
  )
}

export default Faqs