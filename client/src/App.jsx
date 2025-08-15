import React, {useState} from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Vehicles from './pages/vehicles'
import MyBookings from './pages/MyBookings'
import VehicleDetails from './pages/VehicleDetails'
import Footer from './components/Footer'


const App = () => {

const [showLogin, setShowLogin] = useState(false)
const isOwnerpath = useLocation().pathname.startsWith('/owner')

  return (
    <>
      {!isOwnerpath && <Navbar setShowLogin={setShowLogin}/>}



      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/vehicle-details/:id' element={<VehicleDetails/>}/>
        <Route path='/vehicles' element={<Vehicles/>}/>
        <Route path='/my-bookings' element={<MyBookings/>}/>
      </Routes>

    {!isOwnerpath && < Footer />}


    </>
  )
}

export default App