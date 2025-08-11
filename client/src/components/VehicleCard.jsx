import React from 'react'
import { assets } from '../assets/assets'

const VehicleCard = ({vehicle}) => {

    const currency = import.meta.env.VITE_CURRENCY

  return (
    <div className='group rounded-xl overflow-hidden shadow-lg hover:translate-y-1
    transition-all duration-500 cursor-pointer'>

        <div className='relative h-48 overflow-hidden'>
            <img src={vehicle.image} alt="Vehicle Image" className='w-full h-full object-cover
            transition-transform duration-500 group-hover:scale-105'/>

                {vehicle.isAvailable && <p className='absolute top-4 left-4 bg-primary/90
                text-white text-xs px-2.5 py-1 rounded-full'>Available Now</p>}

                <div className='absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm
                text-white px-3 py-2 rouded-lg'>
                    <span className='font-semibold'>{currency}{vehicle.pricePerDay}</span>
                    <span className='text-sm text-white/80'>/ day</span>
                </div>
        </div>

        <div className='p-4 sm:p-5'>
            <div className='flex justify-between itmes-start mb-2'>
                    <div>
                        <h3 className='text-lg font-medium'>{vehicle.brand} {vehicle.model}</h3>
                        <p className='text-muted-foreground text-sm'>{vehicle.category} • {vehicle.year}</p>
                    </div>
            </div>

            <div className='mt-4 grid grid-cols-2 gap-y-2 text-gray-600'>
                    <div className='flex items-center text-sm text-muted-foreground'>
                        <img src={assets.fuel_icon} alt="" className='h-4 mr-2'/>
                        <span>{vehicle.fuel_capacity} Fuel</span>
                    </div>

                    <div className='flex items-center text-sm text-muted-foreground'>
                        <img src={assets.users_icon} alt="" className='h-4 mr-2'/>
                        <span>{vehicle.owner_name}</span>
                    </div>

                    <div className='flex items-center text-sm text-muted-foreground'>
                        <img src={assets.location_icon} alt="" className='h-4 mr-2'/>
                        <span>{vehicle.location}</span>
                    </div>
            </div>

        </div>

    </div>
  )
}

export default VehicleCard