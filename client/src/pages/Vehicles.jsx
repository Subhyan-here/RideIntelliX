import React, { useState } from 'react'
import Title from '../components/Title'
import { assets, dummyCarData } from '../assets/assets'
import VehicleCard from '../components/VehicleCard'
import { motion } from 'motion/react'

const Vehicles = () => {

  const [input, setInput] = useState('')

  return (
    <div>

      <motion.div 
      initial={{opacity: 0, y: 30}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.6, ease: 'easeOut'}}

      className='flex flex-col items-center py-20 bg-light max-md:px-4'>
        <Title title='Available vehicles' subTitle='Browse our selection of premium vehicles available for your next adventure'/>

      <motion.div 
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{delay: 0.3, duration: 0.5 }}

      className='flex items-center bg-white px-4 mt-6 max-w-140 w-full h-12 
      rounded-full shadow'>
        <img src={assets.search_icon} alt="" className='w-4.5 h-4.5 mr-2'/>

        <input onClick={(e)=> setInput(e.target.value)} value={input} type="text" 
            placeholder='Search by make, model, or features' className='w-full h-full 
            outline-none text-gray-500' />
            
            <img src={assets.filter_icon} alt="" className='w-4.5 h-4.5 ml-2'/>
      </motion.div>
    </motion.div>

      <motion.div 
       initial={{opacity: 0}}
       animate={{opacity: 1}}
       transition={{delay: 0.6, duration: 0.5}}
      
      className='px-6 md:px-16 lg:px-24 xl:px-32 mt-10'>
      <p className='text-gray-500 xl:px-20 max-w-7x1 mx-auto'>Showing 
        {dummyCarData.length} Vehicles</p>

      <motion.div 
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{delay: 0.1 * index, duration: 0.4}}
      
      className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4 xl:px-20 max-w-7x1 mx-auto'>
        {dummyCarData.map((vehicle, index)=> (
          <div key={index}>
            <VehicleCard vehicle={vehicle} />
          </div>
        ))}

      </motion.div>
      </motion.div>

    </div>
  )
}

export default Vehicles