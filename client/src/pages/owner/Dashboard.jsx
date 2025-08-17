import React, { useEffect, useState } from 'react'
import { assets, dummyDashboardData } from '../../assets/assets'
import Title from '../../components/owner/Title'

const Dashboard = () => {

    const [data, setData] = useState({
        totalVehicles: 0,
        totalBookings: 0,
        pendingBookings: 0,
        completedBookings: 0,
        recentBookings: [],
        monthlyRevenue: 0,
    })

    const dashboardCards = [
        {title: "Total Vehicles", value: data.totalVehicles, icon: assets.carIconColored},
        {title: "Total Bookings", value: data.totalBookings, icon: assets.listIconColored},
        {title: "Pending", value: data.pendingBookings, icon: assets.cautionIconColored},
        {title: "Confirnmed", value: data.completedBookings, icon: assets.listIconColored},
    ]

    useEffect(()=>{
        setData(dummyDashboardData)
    },[])

  return (
    <div className='px-4 pt-10 md:px-10 flex-1'>
        <Title title="Admin Dashboard" subTitle="Monitor overall platform performance
        including total vehicles, bookings, revenue, and recent activities"/>
    </div>
  )
}

export default Dashboard