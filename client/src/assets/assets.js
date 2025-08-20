import logo from "./logo.png";
import gmail_logo from "./gmail_logo.svg";
import facebook_logo from "./facebook_logo.svg";
import instagram_logo from "./instagram_logo.svg";
import twitter_logo from "./twitter_logo.svg";
import menu_icon from "./menu_icon.svg";
import search_icon from "./search_icon.svg"
import close_icon from "./close_icon.svg"
import users_icon from "./users_icon.svg"
import car_icon from "./car_icon.svg"
import location_icon from "./location_icon.svg"
import fuel_icon from "./fuel_icon.svg"
import addIcon from "./addIcon.svg"
import carIcon from "./carIcon.svg"
import carIconColored from "./carIconColored.svg"
import dashboardIcon from "./dashboardIcon.svg"
import dashboardIconColored from "./dashboardIconColored.svg"
import addIconColored from "./addIconColored.svg"
import listIcon from "./listIcon.svg"
import listIconColored from "./listIconColored.svg"
import cautionIconColored from "./cautionIconColored.svg"
import arrow_icon from "./arrow_icon.svg"
import star_icon from "./star_icon.svg"
import check_icon from "./check_icon.svg"
import tick_icon from "./tick_icon.svg"
import delete_icon from "./delete_icon.svg"
import eye_icon from "./eye_icon.svg"
import eye_close_icon from "./eye_close_icon.svg"
import filter_icon from "./filter_icon.svg"
import edit_icon from "./edit_icon.svg"
import calendar_icon_colored from "./calendar_icon_colored.svg"
import location_icon_colored from "./location_icon_colored.svg"
import testimonial_image_1 from "./testimonial_image_1.jpg"
import testimonial_image_2 from "./testimonial_image_2.jpg"
import testimonial_image_3 from "./testimonial_image_3.jpg"
import main_car from "./main_car.png"
import banner_vehicle_image from "./banner_vehicle_image.png"
import user_profile from "./user_profile.png"
import upload_icon from "./upload_icon.svg"
import car_image1 from "./car_image1.png"
import car_image2 from "./car_image2.png"
import car_image3 from "./car_image3.png"
import car_image4 from "./car_image4.png"

export const cityList = ['Delhi', 'Mumbai', 'Chennai', 'Kolkata', 'Hydrabad']

export const assets = {
    logo,
    gmail_logo,
    facebook_logo,
    instagram_logo,
    twitter_logo,
    menu_icon,
    search_icon,
    close_icon,
    users_icon,
    edit_icon,
    car_icon,
    location_icon,
    fuel_icon,
    addIcon,
    carIcon,
    carIconColored,
    dashboardIcon,
    dashboardIconColored,
    addIconColored,
    listIcon,
    listIconColored,
    cautionIconColored,
    calendar_icon_colored,
    location_icon_colored,
    arrow_icon,
    star_icon,
    check_icon,
    tick_icon,
    delete_icon,
    eye_icon,
    eye_close_icon,
    filter_icon,
    testimonial_image_1,
    testimonial_image_2,
    testimonial_image_3,
    main_car,
    banner_vehicle_image,
    car_image1,
    upload_icon,
    user_profile,
    car_image2,
    car_image3,
    car_image4
}

export const menuLinks = [
    { name: "Home", path: "/" },
    { name: "Vehicles", path: "/vehicles" },
    { name: "My Bookings", path: "/my-bookings" },
]

export const ownerMenuLinks = [
    { name: "Dashboard", path: "/owner", icon: dashboardIcon, coloredIcon: dashboardIconColored },
    { name: "Add Vehicle", path: "/owner/add-vehicle", icon: addIcon, coloredIcon: addIconColored },
    { name: "Manage Vehicles", path: "/owner/manage-vehicles", icon: carIcon, coloredIcon: carIconColored },
    { name: "Manage Bookings", path: "/owner/manage-bookings", icon: listIcon, coloredIcon: listIconColored },
]

export const dummyUserData = {
  "_id": "6847f7cab3d8daecdb517095",
  "name": "Xavier",
  "email": "admin@example.com",
  "role": "owner",
  "image": user_profile,
}

export const dummyCarData = [
    {
        "_id": "67ff5bc069c03d4e45f30b77",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "brand": "Bajaj",
        "model": "Dominar 250",
        "image": car_image1,
        "year": 2025,
        "category": "Bike",
        "seating_capacity": 2,
        "fuel_type": "Petrol",
        "transmission": "Semi-Automatic",
        "pricePerDay": 950,
        "location": "Delhi",
        "description": "The Bajaj Dominar 250 is a dynamic sports-touring motorcycle designed for riders who seek performance, style, and comfort. With its bold design, powerful engine, and premium features, the bike is an excellent choice for daily commutes as well as long-distance touring. It offers a smooth yet thrilling riding experience, making it one of the best options in the 250cc segment.",
        "isAvaliable": true,
        "createdAt": "2025-04-16T07:26:56.215Z",
    },
    {
        "_id": "67ff6b758f1b3684286a2a65",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "brand": "TVS",
        "model": "Ntorq 125",
        "image": car_image2,
        "year": 2020,
        "category": "Scooter",
        "seating_capacity": 2,
        "fuel_type": "Diesel",
        "transmission": "Manual",
        "pricePerDay": 600,
        "location": "Mumbai",
        "description": "The TVS Ntorq 125 is a premium sporty scooter in the 125cc segment that offers a blend of performance, styling, and features.",
        "isAvaliable": true,
        "createdAt": "2025-04-16T08:33:57.993Z",
    },
    {
        "_id": "67ff6b9f8f1b3684286a2a68",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "brand": "OLA",
        "model": "S1 Pro+ Gen 3",
        "image": car_image3,
        "year": 2025,
        "category": "Scooter",
        "seating_capacity": 2,
        "fuel_type": "Electric",
        "transmission": "Automatic",
        "pricePerDay": 600,
        "location": "Chennai",
        "description": "The Ola S1 Pro Plus electric scooter comes in two battery pack options. The 4kWh variant has a range of 242km, reaching top speeds of 128kmph and accelerating from 0-60kmph in just 4.1 seconds. Charging from 0-80% takes approximately 4 hours and 50 minutes via a home charger. All claimed figures.",
        "isAvaliable": true,
        "createdAt": "2025-04-16T08:34:39.592Z",
    },
    {
        "_id": "68009c93a3f5fc6338ea7e34",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "brand": "Royal Enfield",
        "model": "Himalayan 450",
        "image": car_image4,
        "year": 2024,
        "category": "Bike",
        "seating_capacity": 2,
        "fuel_type": "Petrol",
        "transmission": "Semi-Automatic",
        "pricePerDay": 2500,
        "location": "Kolkata",
        "description": "The Royal Enfield Himalayan 450 is a powerful adventure motorcycle featuring a 452cc engine, advanced technology, and a robust design, making it ideal for both off-road and touring experiences.",
        "isAvaliable": true,
        "createdAt": "2025-04-17T06:15:47.318Z",
    }
];

export const dummyMyBookingsData = [
    {
        "_id": "68482bcc98eb9722b7751f70",
        "car": dummyCarData[0],
        "user": "6847f7cab3d8daecdb517095",
        "owner": "6847f7cab3d8daecdb517095",
        "pickupDate": "2025-06-13T00:00:00.000Z",
        "returnDate": "2025-06-14T00:00:00.000Z",
        "status": "confirmed",
        "price": 950,
        "createdAt": "2025-06-10T12:57:48.244Z",
    },
    {
        "_id": "68482bb598eb9722b7751f60",
        "car": dummyCarData[1],
        "user": "6847f7cab3d8daecdb517095",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "pickupDate": "2025-06-12T00:00:00.000Z",
        "returnDate": "2025-06-12T00:00:00.000Z",
        "status": "pending",
        "price": 600,
        "createdAt": "2025-06-10T12:57:25.613Z",
    },
    {
        "_id": "684800fa0fb481c5cfd92e56",
        "car": dummyCarData[2],
        "user": "6847f7cab3d8daecdb517095",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "pickupDate": "2025-06-11T00:00:00.000Z",
        "returnDate": "2025-06-12T00:00:00.000Z",
        "status": "pending",
        "price": 600,
        "createdAt": "2025-06-10T09:55:06.379Z",
    },
    {
        "_id": "6847fe790fb481c5cfd92d94",
        "car": dummyCarData[3],
        "user": "6847f7cab3d8daecdb517095",
        "owner": "6847f7cab3d8daecdb517095",
        "pickupDate": "2025-06-11T00:00:00.000Z",
        "returnDate": "2025-06-12T00:00:00.000Z",
        "status": "confirmed",
        "price": 2500,
        "createdAt": "2025-06-10T09:44:25.410Z",
    }
]

export const dummyDashboardData = {
    "totalVehicles": 4,
    "totalBookings": 2,
    "pendingBookings": 0,
    "completedBookings": 2,
    "recentBookings": [
        dummyMyBookingsData[0],
        dummyMyBookingsData[1]
    ],
    "monthlyRevenue": 840
}