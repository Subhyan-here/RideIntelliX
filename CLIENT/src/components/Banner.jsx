import React from 'react'
import { asssets } from '../assets/assets'

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row md:items-start item-center justify-between px-8 min-md:pl-14 pt-10 bg-gradient-to-r from-[#0558FE] to-[#A9CFFF]MAX-w-6xl mx-3 md:mx-auto rounded-2xl overflow-hidden'>
     
      <div className='textx-white'>
        <h2 className='text-3xl font-medium'>Do you own a vehicle?</h2>
        <p className='mt-2'> Monetize your vehicle effortlessly by listing it on VehicleRental</p>
        <p className='max-w-130'>We take care of insurance, driver verification and secure payments- so you can earn passive income, stress-free.</p>
       <button className='px-6 py-2 bg-white hover:bg-slate-100 transition-all text-primary rounded-l text-m mt-4 cursor-pointer'>List your car</button>
      </div>
        <img src={assets.banner_vehicle_image} alt="vehicle" className='max-h-45 mt-10' />
      </div>
    

  )
}

export default Banner