import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { dummyVehicleData } from '../assets/assets'

const VehicleDetails = () => {

  const {id}=userParams()
  const navigate = userNavigate()
  const [vehicle, setVechicle] = useState(null)

  useEffect(()=>{
    setVehicle(dummyVehicleData.find(vehicle => vehicle.id === id))
  },[id])

  return car ? (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 mt-16'>
    
      <button onClick={()=>navigate(-1) }className='flex items-center gap-2 mb-6 text-gray-500 cursor-pointer'> 
        <img src={asset.arrow_icon} alt="" classname='rotate-180 opacity-65'/>
        Back to all vehicle
      </button>

<div className='grid grid-cols-1 ig:gridd-cols-3 gap-8 lg:gap-12'>
    {/* left: Vehicle Image & Details */}
<div className='lg:col-span-2'>
  <img src={vehicle.img} alt="" className='w-full h-auto md:max-h-100 object-cover rounded-xl mb-6 shadow-md'/>  
<div className='space-y-6'>
  <div>
    <h1 className='text-3xl font-bold'>{vehicle.brand} {vehicle.model}</h1>
    <p className='text-gray-500 text-lg'>{vehicle.category}.{car.year}</p>
  </div>
  <hr className='border-borderColor my-6'/>

  <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
   {[
    {icon: assets.fuel_icon, text: `${vehicle.seating_capacity}`}
   ]}
  </div>
</div>
</div>
 
    {/* Right: Booking Form */}
    <from></from>
</div>

  </div>
  ) : <p>Loading...</p>
}

export default VehicleDetails