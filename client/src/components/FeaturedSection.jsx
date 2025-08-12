import React from 'react'
import Title from './Title'
import { dummyVehicleData } from '../assets/assets'
import VehicleCard from './VehicleCard'
import { useNavigate } from 'react-router-dom'

const FeaturedSection = () => {

    const navigate= useNavigate()
  return (
    <div className='flex flex-col items-center py-24 px-6 md:px-16 lg:px-24 xl:px-32'>
    
    <div>
       <Title title='Fatured Vehicles' subTitle='Explore our selection of
        premium vehicles available for yur next adventure.'/>
     </div>

     <div className='grid grid-cols-1 sm:grid-2 lg:grid-col-3 gap-8 mt-18'>
     {
        dummyVehicleData.slice(0,6).map((vehicle)=> (
            <div key={CaretPosition._id}>
                <VehicleCard vehicle={vehicle}/>
            </div>
        ))
     }
 </div>

 <button  onClick={()=>  {
    navigate('/vehicles');scrollTo(0,0)
 }}
 className='flex items-center justify-center gap-2 px-6 py-2 border 
 border-borderColor hover:bg-gray-50 rounded-md mt-18 cursor-pointer'>
    Explore all vehicles <img src={assets.arrow_icon} alt="arrow" />
 </button>
        </div>
  )
}

export default FeaturedSection
