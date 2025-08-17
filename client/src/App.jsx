import React, {useState} from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import MyBookings from './pages/MyBookings'
import VehicleDetails from './pages/VehicleDetails'
import Footer from './components/Footer'
import Vehicles from './pages/Vehicles'
import Layout from './pages/owner/Layout'
import Dashboard from './pages/owner/Dashboard'
import AddVehicle from './pages/owner/AddVehicle'
import ManageVehicles from './pages/owner/ManageVehicles'
import ManageBookings from './pages/owner/ManageBookings'
import Login from './components/Login'


const App = () => {

const [showLogin, setShowLogin] = useState(false)
const isOwnerpath = useLocation().pathname.startsWith('/owner')

  return (
    <>
      {showLogin &&<Login  setShowLogin={setShowLogin}/>}
      
      {!isOwnerpath && <Navbar setShowLogin={setShowLogin}/>}

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/vehicle-details/:id' element={<VehicleDetails/>}/>
        <Route path='/vehicles' element={<Vehicles/>}/>
        <Route path='/my-bookings' element={<MyBookings/>}/>
        <Route path='/owner' element={<Layout />}>
          <Route index element={<Dashboard/>}/>
          <Route path="add-vehicle" element={<AddVehicle/>}/>
          <Route path="manage-vehicles" element={<ManageVehicles/>}/>
          <Route path="manage-bookings" element={<ManageBookings/>}/>
        </Route>
      </Routes>

    {!isOwnerpath && < Footer />}


    </>
  )
}

export default App