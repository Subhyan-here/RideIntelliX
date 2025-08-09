import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import VehicleDetails from './pages/VehicleDetails'
import Vehicles from './pages/Vehicles'
import MyBookings from './pages/MyBookings'

const App = () => {

const [showLogin, setShowLogin] = useState(false)
const isOwnerPath = useLocation().pathname.startsWith('/owner') 

  return (
    <>
      {!isOwnerPath && <Navbar setShowLogin={setShowLogin}/>}

      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/vehicle-details/:id'element={<VehicleDetails/>}/>
        <Route path='/vehicles'element={<Vehicles/>}/>
        <Route path='/my-bookings'element={<MyBookings/>}/>

        
      </Routes>
    </>
  )
}

export default App