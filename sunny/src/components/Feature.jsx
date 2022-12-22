import React from 'react'
import { useState } from 'react'
import {features} from '../constants'

//const [readMore, setReadMore] = useState(false);

const FeatureMap = (({title, description, image})=>(
    <div className="flex flex-row justify-center items-center ">
        <div>
        <img src={image} alt="image" className='flex'/>  
        </div>
        <div className="flex justify-start flex-col m-3 py-3">
            <h1 className='text-3xl my-4 '>{title}</h1>
            <p className='text-gray max-w-xl my-1'>{description}</p>
        </div>
    
    </div>
))

{/*to render*/}
const Feature = () => {
  return (
    <div>
    {
    features.map((feature,index) =>(
       <FeatureMap  key={feature.id} {...feature} index={index} 
        className={` ${index === features.length - 1 ? "hidden" : "mr-2"}`}
       />      
    ))
    }
    </div>
  )
}

export default Feature;