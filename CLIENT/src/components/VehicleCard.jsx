import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const VehicleCard = ({Vehicle}) => {

    const currency = import.meta.env.VITE_CURRENCY
    const navigate = useNavigate()
  return (
    <div onClick={()=> {navigate(`/vehicle-details/${vehicle._id}`); scrollTo(0,0)}} className='group rounded-xl  overflow-hidden ssshadow-lg hover:-translate-y-1 transition-all duration-500 cursor-pointer'>

    <div className='relative h-48 overflow-hidden'>
      <img src={vehicle.image} alt="Vehicle  Image" className='w-full h-full object-cover trasition-transform duration-500 group-hover:scale-105' />

      {vehicle.isAvailable &&<p className='absolute top-4 left-4  bg-primary/90 text-white text-xs px-2.5 py-1 rounded-full'>Available Now</p>}

      <div className='absolute bottom-4 riht-4 bg-black/80 backdrop-blur-sm text-white px-3 py-2 rounded-lg'>
      <span className='font-semibold'>{currency}{vehicle.pricePerDay}</span>
      <span className='text-sm textx-white/80'> / day</span>
    </div>
    </div>


    <div className='p-4 sm:p-5'>
    <div className='flex justify-betweem items-start mb-2'>
      <div>
        <h3 className='text-lg font-medium'>{vehcle.brand}  {vehicle.model}</h3>
        <p className='text-muted-foreground text-sm'>{vehicle.category}. {vehicle.year}</p>
      </div>
    </div>
    <div className='mt-4 grid grid-cols-2 gap-y-2 text-gray-600'>
       <div className='flex items-center text-sm textx-muted-foreground'>
        <img src={assets.users_icon} alt=""  className='h-4 mr-2'/>
        <span>{vehcle.seating_capacity} Seats</span>
              </div>
    </div>
    <div className='flex items-center text-sm textx-muted-foreground'>
        <img src={assets.fuel_icon} alt=""  className='h-4 mr-2'/>
        <span>{vehcle.fuel_type}</span>
              </div>
               <div className='flex items-center text-sm textx-muted-foreground'>
        <img src={assets.vehicle_icon} alt=""  className='h-4 mr-2'/>
        <span>{vehcle.transmission}</span>
              </div>
              <div className='flex items-center text-sm textx-muted-foreground'>
        <img src={assets.loction_icon} alt=""  className='h-4 mr-2'/>
        <span>{vehcle.location}</span>
              </div>



    </div>

    </div>
  )
}

export default VehicleCard