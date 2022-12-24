import React from 'react'
import {Faq} from '../constants'
import Faqs from './Faqs'

const FAQ = () => {
  return (
    <section id='FAQ' className='py-10 flex flex-col'>
      <div className="text-3xl flex justify-center items-end m-3 py-5">
        <h1>Frequently Ask Questions</h1>
      </div>
      <div className="grid grid-cols-3 gap-3 text-start relative">
      {
          Faq.map((question) => (
            <Faqs key={question.id} {...question}/>
          ))
        }
      </div>
       
    </section>
  )
}

export default FAQ