 import React from 'react'
 import { sponsors } from '../constants'

 const Sponsors = () => {
   return (
     <div className='relative top-10 py-7'>
      <div className="flex justify-center text-center">
        <h1 className='text-2xl text-gray font-light m-3 pb-3 pt-10'>SOME OF OUR TRUSTED CLIENTS</h1> 
      </div>
      <div className='flex flex-row justify-center items-center m-2 gap-20'>
      {
        sponsors.map((sponsor, index) => (
          <div key={index.id}>
           <img src={sponsor.image} index={index} className='flex justify-center'/>
          </div>
        ))
      }
      </div>

     </div>
   )
 }
 
 export default Sponsors