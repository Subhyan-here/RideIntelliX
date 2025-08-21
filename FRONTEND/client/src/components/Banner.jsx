import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react'

const Banner = () => {
  return (
    <motion.div 
    initial={{y: 50, opacity: 0}}
    animate={{y: 0, opacity: 1}}
    transition={{duration: 0.6}}
    className='flex flex-col md:flex-row md:items-start item-center
     justify-between px-8 min-md:pl-14 pt-10 bg-gradient-to-r from-[#0558FE] to-
     [#A9CFFF] max-w-6xl mx-3 md:mx-auto rounded-2xl overflow-hidden'>
      
        <div className='text-white'>
            <h2 className='text-3xl font-medium'>Do you own a luxury Vehicle?</h2>
            <p className='mt-2'>Monitize your vehicle effortlessly by listing it on RideIntelliX</p>
            <p className='max-w-130'>We take care of insurence,driver verification
              and secure payments - so you can earn passive income, stress-free and effortlessly</p>
            
             <motion.button 
             whileHover={{ scale: 1.05}}
             whileTap={{ scale: 0.95}}
             
             className='px-6 py-2 bg-white hover:bg-slate-100 transition-all
             text-primary rounded-lg text-sm mt-4 cursor-pointer'>List your vehicle today</motion.button>
            </div>

          <motion.img 
          initial={{x: 50, opacity: 0}}
          whileInView={{x: 0, opacity: 1}}
          transition={{duration: 0.6, delay: 0.4}}
          src={assets.banner_vehicle_image} alt="car" className='max-h-70 mt-10'/>
    </motion.div>
  )
}

export default Banner 
