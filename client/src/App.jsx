import React from 'react'
import Navbar from './components/Navbar'
import { useState } from 'react'

const App = () => {

const [showLogin, setShowLogin] = useState(false)
const isOwnerpath = useLocation().pathname.startsWith('/owner')

  return (
    <>
      {!isOwnerpath && <Navbar setShowLogin={setShowLogin}/>}
    </>
  )
}

export default App