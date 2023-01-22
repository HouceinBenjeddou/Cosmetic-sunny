import React from 'react'
import {features} from '../constants'

//const [readMore, setReadMore] = useState(false);

const FeatureMap = (({title, description, image})=>(
    <div className=" left-[10%] right-[10%] px-3 mx-3 relative justify-center text-center inline-block">
        <div className='items-center inline-block'>
        <img src={image} alt="image" className='flex justify-center items-center w-[450px] '/>  
        </div>
        <div className="flex flex-col m-3 py-3">
            <h1 className='text-3xl my-4 '>{title}</h1>
            <p className='text-gray max-w-xl my-1'>{description}</p>
        </div>
    
    </div>
))

const Feature = () => {
  return (
    <div>
    {
    features.map((feature,index) =>(
       <FeatureMap  key={feature.id} {...feature} index={index} 
   //     className={` ${index === features.length - 1 ? "hidden" : "mr-2"}`}
       />      
    ))
    }
    </div>
  )
}

export default Feature;