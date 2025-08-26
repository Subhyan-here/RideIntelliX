import React, { useEffect, useState } from 'react'
import { assets, dummyCarData } from '../../assets/assets'
import Title from '../../components/owner/Title'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const ManageVehicles = () => {

  const {isOwner, axios, currency} = useAppContext()

  const [vehicles,setVehicles] = useState([])

  const fetchOwnervehicles = async ()=>{
    setVehicles(dummyCarData)
    // try {
    //   const {data} = await axios.get('/api/owner/vehicles')
    //   if(data.success){
    //     setVehicles(data.vehicles)
    //   }else{
    //     toast.error(data.message)
    //   }
    // } catch (error) {
    //   toast.error(error.message)
    // }
  }

    const toggleAvailability = async (vehicleId)=>{
    try {
      const {data} = await axios.post('/api/owner/toggle-vehicle', {vehicleId})
      if(data.success){
        toast.success(data.message)
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

    const deleteVehicle = async (vehicleId)=>{
    try {

      const confirm = window.confirm('Are you sure you want to delete this Vehicle?')

      if(!confirm) return null

      const {data} = await axios.post('/api/owner/delete-vehicle', {vehicleId})
      if(data.success){
        toast.success(data.message)
        fetchOwnervehicles()
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }


  useEffect(()=>{
    isOwner && fetchOwnervehicles()
  },[isOwner])

  return (
    <div className='px-4 pt-10 md:px-10 w-full'>

      <Title title="Manage Vehicles" subTitle="View all listed vehicles, update their
       details, or revove them from the booking platform." />

       <div className='max-w-3x1 w-full rounded-md overflow-hidden border 
       border-borderColor mt-6'>

        <table className='w-full border-collapse text-left text-sm text-gray-600'>
          <thead className='text-gray-500'>
            <tr>
              <th className="p-3 font-medium">Vehicle</th>
              <th className="p-3 font-medium max-md:hidden">Category</th>
              <th className="p-3 font-medium">Price</th>
              <th className="p-3 font-medium max-md:hidden">Status</th>
              <th className="p-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {vehicles.map((vehicle, index) => (
              <tr key={index} className='border-t border-borderColor'>

                <td className='P-3 flex items-center gap-3'>
                    <img src={vehicle.image} alt="" className="h-12 w-12 aspect-square 
                    rounded-md object-cover" />
                    <div className='max-md:hidden'>
                      <p className='font-medium'>{vehicle.brand} {vehicle.model}</p>
                      <p className='text-xs text-gray-500'>{vehicle.seating_capacity} • 
                        {vehicle.transmission}</p>
                    </div>
                </td>

                <td className='p-3 max-md:hidden'>{vehicle.category}</td>
                <td className='p-3'>{currency}{vehicle.pricePerDay}/day</td>

                <td className='p-3 max-md:hidden'>
                  <span className={`px-3 py-1 rounded-full text-xs ${vehicle.isAvaliable ? 'bg-green-100 text-green-500' : 'bg-red-100 text-red-500'}`}>
                    {vehicle.isAvaliable ? "Available" : "Unavailable" }
                  </span>
                </td>
                
                <td className='flex items-center p-3'>
                  <img onClick={()=> toggleAvailability(vehicle._id)} src={vehicle.isAvailable ? assets.eye_close_icon : assets.
                    eye_icon} alt="" className='cursor-pointer' />

                  <img onClick={()=> deleteVehicle(vehicle._id)} src={assets.delete_icon} alt="" className='cursor-pointer' />
                </td>

              </tr>
            ))}  
          </tbody>
        </table>

       </div>
      
    </div>
  )
}

export default ManageVehicles