import React from 'react'
import { asssets } from '../assets/assets'

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row md:items-start item-center justify-between px-8 min-md:pl-14 pt-10 bg-gradient-to-r from-[#0558FE] to-[#A9CFFF]MAX-w-6xl mx-3 md:mx-auto rounded-2xl overflow-hidden'>
     
      <div>
        <h2>Do you own a luxury car?</h2>
        <p>Wnt u iivv</p>
      </div>
        <img src={assets.banner_vehicle_image} alt="vehicle" className='max-h-45 mt-10' />
      </div>
    

  )
}

export default Banner