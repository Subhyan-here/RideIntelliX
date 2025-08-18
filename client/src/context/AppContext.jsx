import { createContext, useContext, useEffect } from "react";
import axios from 'axios'
import {toast} from 'react-hot-toast'
import { useNavigate } from "react-router-dom";
import { useState } from "react";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL 

export const AppContext = createContext();

export const AppProvider = ({ children })=>{

    const navigate = useNavigate()
    const currency = import.meta.env.VITE_CURRENCY

    const [token, setToken] = useState(localStorage.getItem("token") || null);
    const [user, setUser] = useState(null)
    const [isowner, setIsOwner] = useState(false)
    const [showLogin, setShowLogin] = useState(false)
    const [pickupDate, setPickupDate] = useState('')
    const [returnDate, setReturnDate] = useState('')
    
    const [vehicles, setVehicles] = useState([])

    //Function to check if user is logged in
    const fetchUser = async ()=>{
        try {
            const {data} = await axios.get('/api/user/data')
            if (data.success){
                setUser(data.user)
                setIsOwner(data.user.role === 'owner')
            }else{
                navigate('/')
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    //Fucntion to fetch all vehicles from the server
    const fetchVehicles = async () =>{
        try {
            const {data} = await axios.get('/api/user/vehicles')
            data.success ? setVehicles(data.vehicles) : toast.error(data.message)
        } catch (error) {
            toast.error(error.message)
        }
    }

    //Function tp log out the user
    const logout = ()=>{
        localStorage.removeItem('token')
        setToken(null)
        setUser(null)
        setIsOwner(false)
        axios.defaults.headers.common['Authorization'] = ''
        toast.success('You have been successfully logged out')
    }


    //useEffect to retrieve the token from localStorage
    useEffect(()=>{
        const token = localStorage.getItem('token')
        setToken(token)
        fetchVehicles()
    },[])

    //useEffect to fetch user data when token is available
    useEffect(()=>{
        if(token){
            axios.defaults.headers.common['Authorization'] = `${token}`
            fetchUser()
        }
    },[token])

    const value = {
        navigate,currency, axios, user, setUser,
        token, setToken, isowner, setIsOwner, fetchUser, showLogin,
        setShowLogin, logout, fetchVehicles, vehicles, setVehicles, 
        pickupDate, setPickupDate, returnDate, setReturnDate
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}


export const useAppContext = ()=>{
    return useContext(AppContext)
}