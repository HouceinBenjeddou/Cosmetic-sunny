import React from 'react'
import { useState } from 'react'
import {features} from '../constants'

//const [readMore, setReadMore] = useState(false);

const FeatureMap = (({title, description, image})=>(
    <div className="flex flex-col justify-center items-center ">
      <img src={image} alt="image" />  
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
))

{/*to render*/}
const Feature = () => {
  return (
    <div>
    {
    features.map((feature,index) =>(
       <FeatureMap  key={feature.id} {...feature} index={index} />      
    ))
    }
    </div>
  )
}

export default Feature;