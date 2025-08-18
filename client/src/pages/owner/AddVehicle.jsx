import React, { useState } from 'react'
import Title from '../../components/owner/Title'
import { assets } from '../../assets/assets'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const AddVehicle = () => {

    const {axios, currency} = useAppContext() 

    const [image, setImage] = useState(null)
    const [vehicle, setVehicle] = useState({
        brand: '',
        model: '',
        year: 0,
        priceperday: 0,
        fuel_type:'',
        vehicle_type: '',
        location: '',
        description: '',
    })

    const [isLoading, setIsLoading] = useState(false)

    const onSubmitHandler = async (e) => {
  e.preventDefault();
  if (isLoading) return;

  setIsLoading(true);
  try {
    const formData = new FormData();
    if (image) formData.append('image', image);

    // append each field so req.body has them directly
    const payload = {
      brand: vehicle.brand.trim(),
      model: vehicle.model.trim(),
      year: Number(vehicle.year || 0),
      priceperday: Number(vehicle.priceperday || 0),
      fuel_type: vehicle.fuel_type,
      location: vehicle.location,
      description: vehicle.description.trim(),
    };
    Object.entries(payload).forEach(([k, v]) => formData.append(k, v));

    await axios.post('/api/owner/add-vehicle', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    toast.success('Vehicle Added');
  } catch (err) {
    toast.error(err.response?.data?.message || err.message);
  } finally {
    setIsLoading(false);
  }
}

  return (
    <div className='px-4 py-10 md:px-10 flex-1'>
        <Title title="Add New Vehicle" subTitle="Fill in the details to list a new vehicle for
        booking, including pricing, availability, and vehicle specification"/>

    <form onSubmit={onSubmitHandler} className='flex flex-col gap-5 text-gray-500
    text-sm mt-6 max-w-xl'>

        {/* Vehicle image */}
        <div className='flex items-center gap-2 w-full'>
            <label htmlFor="Vehicle-image">
                <img src={image ? URL.createObjectURL(image) : assets.upload_icon} alt="" className='h-14 rounded cursor-pointer'/>
                <input type="file" id="Vehicle-image" accept="image/*" hidden onChange={e=>setImage(e.target.files[0])}/>
            </label>
            <p className='text-sm text-gray-500'>Upload a picture of your Vehicle</p>
        </div>

        {/* Vehicle Brand & Image */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='flex flex-col w-full'>
                <label>Brand</label>
                <input type="text" placeholder="e.g. Royal Enfield, Hero, Ola, TVS... " required
                className='px-3 py-2 mt-1 border border-borderColor rounded-md
                outline-none' value={vehicle.brand} onChange={e=> setVehicle({...vehicle, brand: e.target.value})}/>
            </div>
            
            <div className='flex flex-col w-full'>
                <label>Model</label>
                <input type="text" placeholder="e.g. Splendor,Dominar 400, Apache RTR 160, Classic 350... " required
                className='px-3 py-2 mt-1 border border-borderColor rounded-md
                outline-none' value={vehicle.model} onChange={e=> setVehicle({...vehicle, model: e.target.value})}/>
            </div>
        </div>

        {/* Vehicle Year, Price, Category */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
           <div className='flex flex-col w-full'>
                <label>Year</label>
                <input type="number" placeholder="Enter a suitable year" required
                className='px-3 py-2 mt-1 border border-borderColor rounded-md
                outline-none' value={vehicle.year} onChange={e=> setVehicle({...vehicle, year: e.target.value})}/>
            </div>

            <div className='flex flex-col w-full'>
                <label>Daily Price ({currency})</label>
                <input type="number" placeholder="Enter the amount" required
                className='px-3 py-2 mt-1 border border-borderColor rounded-md
                outline-none' value={vehicle.priceperday} onChange={e=> setVehicle({...vehicle, priceperday: e.target.value})}/>
            </div>

            <div className='flex flex-col w-full'>
                <label>Catagory</label>
               <select onChange={e=> setVehicle({...vehicle, catagory: e.target.value})} value={vehicle.catagory}
                className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'>
                <option value="">Select a Catagory</option>
                <option value="MotorCycle">MotorCycle</option>
                <option value="Scooter">Scooter</option>
               </select>
            </div>
        </div>

        {/* Vehicle Transmission, Fuel Type, Seating Capacity [Not necessary] */}
         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            {/* <div className='flex flex-col w-full'>
                <label>Transmission</label>
               <select onChange={e=> setVehicle({...vehicle, transmission: e.target.value})} value={vehicle.transmission}
                className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'>
                <option value="">Select a Transmission</option>
                <option value="MotorCycle">Automatic</option>
                <option value="Scooter">Manual</option>
               </select>
            </div> */}

             <div className='flex flex-col w-full'>
                <label>Fuel Type</label>
               <select onChange={e=> setVehicle({...vehicle, fuel_type: e.target.value})} value={vehicle.fuel_type}
                className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'>
                <option value="">Select a fuel type</option>
                <option value="Petrol">Petrol</option>
                <option value="Electric">Elecctric</option>
               </select>
            </div>

            {/* <div className='flex flex-col w-full'>
                <label>Seating Capacity</label>
                <input type="number" placeholder="3" required
                className='px-3 py-2 mt-1 border border-borderColor rounded-md
                outline-none' value={vehicle.seating_capacity} onChange={e=> setVehicle({...vehicle, seating_capacity: e.target.value})}/>
            </div>*/}
         </div> 

        {/* Vehicle Location */}
        <div className='flex flex-col w-full'>
             <label>Location</label>
               <select onChange={e=> setVehicle({...vehicle, location: e.target.value})} value={vehicle.location}
                className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'>
                <option value="">Select a Location</option>
                <option value="Delhi">Delhi</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Chennai">Chennai</option>
               </select>
        </div>

        {/* Vehicle Description */}
         <div className='flex flex-col w-full'>
                <label>Description</label>
                <textarea rows={5} placeholder="Enter a detailed description about your Vehicle.." required
                className='px-3 py-2 mt-1 border border-borderColor rounded-md
                outline-none' value={vehicle.description} onChange={e=> setVehicle({...vehicle, description: e.target.value})}></textarea>
        </div>

        <button className='flex items-center gap-2 px-4 py-2.5 mt-4 bg-primary
        text-white rounded-md font-medium w-max cursor-pointer'>
            <img src={assets.tick_icon} alt="" />
            {isLoading ? 'Listing...' : 'List Your Vehicle'}
        </button>


    </form>

    </div>
  )
}

export default AddVehicle