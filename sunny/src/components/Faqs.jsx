import React from 'react'
import { useState } from 'react'
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'

const Faqs = ({question,answer}) => {
const [toggle, setToggle] = useState(false);
const [active, setActive] = useState(false);
return (
    <div className="shadow-xl flex flex-wrap p-1 m-2 gap-5">
     <div className="p-3 flex flex-col text-start items-start">       
     <div className="flex flex-row justify-center items-center">
     <span className='flex flex-row justify-center items-center text-4xl' onClick={()=>setToggle(!toggle)}>
        {toggle ? <AiOutlineMinus className=' cursor-pointer ' /> : <AiOutlinePlus className=' cursor-pointer '/> }
       </span>
       <h2 className='mx-2 my-1 py-3 text-2xl font-normal'>{question}</h2>
     </div>
     
      {toggle  && 
      <div>
          <p className='leading-8 py-2 mx-2 pb-3 text-start'>{answer}</p>
      </div>
       }
    </div>
  </div>
  )
}

export default Faqs