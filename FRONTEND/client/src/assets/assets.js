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
import car_image5 from "./car_image5.png"
import car_image6 from "./car_image6.png"
import car_image7 from "./car_image7.png"
import car_image8 from "./car_image8.png"
import car_image9 from "./car_image9.png"
import car_image10 from "./car_image10.png"
import car_image11 from "./car_image11.png"
import car_image12 from "./car_image12.png"
import about from "./about.jpg"

export const cityList = ['Delhi', 'Mumbai', 'Chennai', 'Kolkata', 'Hydrabad','Pune','Bhopal','Bihar','Goa','Sikkim','Bangalore']

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
    car_image4,
    car_image5,
    car_image6,
    car_image7,
    car_image8,
    car_image9,
    car_image10,
    car_image11,
    car_image12,
    about,
}

export const menuLinks = [
    { name: "Home", path: "/" },
    { name: "Vehicles", path: "/vehicles" },
    { name: "My Bookings", path: "/my-bookings" },
    {name: "About Us", path: "/about-us"},
]

export const ownerMenuLinks = [
    { name: "Dashboard", path: "/owner", icon: dashboardIcon, coloredIcon: dashboardIconColored },
    { name: "Add Vehicle", path: "/owner/add-vehicle", icon: addIcon, coloredIcon: addIconColored },
    { name: "Manage Vehicles", path: "/owner/manage-vehicles", icon: carIcon, coloredIcon: carIconColored },
    { name: "Manage Bookings", path: "/owner/manage-bookings", icon: listIcon, coloredIcon: listIconColored },
]

// export const dummyUserData = {
//   "_id": "6847f7cab3d8daecdb517095",
//   "name": "Xavier",
//   "email": "admin@example.com",
//   "role": "owner",
//   "image": user_profile,
// }

export const dummyCarData = [
    {
        "_id": "67ff5bc069c03d4e45f30b77",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "brand": "Bajaj",
        "model": "Dominar 250",
        "image": car_image1,
        "year": 2025,
        "category": "Bike",
        "user_name": "Tamajeet Ghosh",
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
        "user_name": "Sneha Bose",
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
        "user_name": "Tushar Dey",
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
        "user_name": "Souvik Mukherjee",
        "fuel_type": "Petrol",
        "transmission": "Semi-Automatic",
        "pricePerDay": 2500,
        "location": "Kolkata",
        "description": "The Royal Enfield Himalayan 450 is a powerful adventure motorcycle featuring a 452cc engine, advanced technology, and a robust design, making it ideal for both off-road and touring experiences.",
        "isAvaliable": true,
        "createdAt": "2025-04-17T06:15:47.318Z",
    },
    {
        "_id": "67ff5bc069c03d4e45f30b02",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "brand": "OLA",
        "model": "Roadster",
        "image": car_image6,
        "year": 2025,
        "category": "Bike",
        "user_name": "Raj Kundra",
        "fuel_type": "Electric",
        "transmission": "Semi-Automatic",
        "pricePerDay": 1800,
        "location": "Mumbai",
        "description": "The Ola Roadster is an electric motorcycle available in multiple variants, including the Roadster X, Roadster X Plus, and Roadster Pro. These variants offer different ranges, top speeds, and battery capacities. The Roadster X, for example, has a range of up to 252 km and a top speed of 118 kmph, while the Roadster Pro can reach 579 km and 194 kmph.",
        "isAvaliable": true,
        "createdAt": "2025-04-16T07:26:56.215Z",
    },
    {
        "_id": "67ff5bc069c03d4e45f30b45",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "brand": "Royal Enfield",
        "model": "Classic 350",
        "image": car_image5,
        "year": 2023,
        "category": "Bike",
        "user_name": "Bikash Santra",
        "fuel_type": "Petrol",
        "transmission": "Semi-Automatic",
        "pricePerDay": 2000,
        "location": "Kolkata",
        "description": "Royal Enfield Classic 350 DarkThe Royal Enfield Classic 350 is a retro-styled motorcycle known for its classic design and comfortable riding experience. It features a 349cc engine, a twin downtube spine frame, and a comfortable, upright riding posture. ",
        "isAvaliable": true,
        "createdAt": "2025-04-16T07:26:56.215Z",
    },
    {
        "_id": "67ff5bc069c03d4e45f30b69",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "brand": "TVS",
        "model": "Apache RTR 180",
        "image": car_image7,
        "year": 2024,
        "category": "Bike",
        "user_name": "Gurpreet Singh",
        "fuel_type": "Petrol",
        "transmission": "Semi-Automatic",
        "pricePerDay": 1270,
        "location": "Delhi",
        "description": "The TVS Apache RTR 180 is a sporty motorcycle designed for performance and agility, featuring a 177.4 cc single-cylinder, 4-stroke, air-cooled engine that delivers a maximum power output of 17.63 PS at 9,250 rpm and a peak torque of 14.73 Nm at 7,250 rpm. ",
        "isAvaliable": true,
        "createdAt": "2025-04-16T07:26:56.215Z",
    },
    {
        "_id": "67ff5bc069c03d4e45f30b27",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "brand": "TVS",
        "model": "Jupiter",
        "image": car_image8,
        "year": 2023,
        "category": "Scooter",
        "user_name": "Raghu Ram",
        "fuel_type": "Petrol",
        "transmission": "Semi-Automatic",
        "pricePerDay": 800,
        "location": "Chennai",
        "description": "The TVS Jupiter is a popular scooter model launched by TVS Motor Company in India in September 2013, designed as a rival to the Honda Activa. It has become one of the highest-selling scooters in India, second only to the Honda Activa, and is known for its comfort, fuel efficiency, and practicality. ",
        "isAvaliable": true,
        "createdAt": "2025-04-16T07:26:56.215Z",
    },
    {
        "_id": "67ff5bc069c03d4e45f30b40",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "brand": "TVS",
        "model": "iQube",
        "image": car_image9,
        "year": 2025,
        "category": "Scooter",
        "user_name": "Ashish Sharma",
        "fuel_type": "Hybrid",
        "transmission": "Semi-Automatic",
        "pricePerDay": 850,
        "location": "Hydrabad",
        "description": "TVS Motor Company has recently launched the iQube Hybrid 2025, a new hybrid scooter combining a 110 cc petrol engine with a 4.4 kW electric motor, offering a 200 km range.",
        "isAvaliable": true,
        "createdAt": "2025-04-16T07:26:56.215Z",
    },
    {
        "_id": "67ff5bc069c03d4e45f30b89",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "brand": "Honda",
        "model": "SP160",
        "image": car_image10,
        "year": 2024,
        "category": "Bike",
        "user_name": "Naman Marthur",
        "fuel_type": "Petrol",
        "transmission": "Semi-Automatic",
        "pricePerDay": 1300,
        "location": "Kolkata",
        "description": " The Honda SP 160 is a premium commuter motorcycle designed to offer aspirational aesthetics, commendable performance, and a range of desirable features, positioned between the Honda SP 125 and the Unicorn in Honda's lineup. It is powered by a 162.71cc BS6 Phase 2 engine, producing 13.27 bhp and 14.58 Nm of torque, mated to a five-speed manual gearbox.",
        "isAvaliable": true,
        "createdAt": "2025-04-16T07:26:56.215Z",
    },
    {
        "_id": "67ff5bc069c03d4e45f30s25",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "brand": "Ather",
        "model": "450",
        "image": car_image11,
        "year": 2024,
        "category": "Scooter",
        "user_name": "Ramesh Iyer",
        "fuel_type": "Electric",
        "transmission": "Semi-Automatic",
        "pricePerDay": 900,
        "location": "Hydrabad",
        "description": "The Ather 450X is an electric scooter manufactured by Ather Energy in India. It was launched in Bengaluru in September 2018.[2][3] It is powered by a 5.4 kW (7.2 BHP) Brushless DC electric motor, and a 3.7 kWh lithium-ion battery pack. The scooter can accelerate 0–40 km/h (0–25 mph) in 3.3 seconds. It has a top speed of 90 km/h (56 mph) with a Certified Range of 146 km (91 mi). ",
        "isAvaliable": true,
        "createdAt": "2025-04-16T07:26:56.215Z",
    },
    {
        "_id": "67ff5bc069c03d4e45f30a23",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "brand": "Hero",
        "model": "Super Splendor",
        "image": car_image12,
        "year": 2021,
        "category": "Bike",
        "user_name": "Ganesh Talpade",
        "fuel_type": "Petrol",
        "transmission": "Manual",
        "pricePerDay": 800,
        "location": "Mumbai",
        "description": " The Hero Super Splendor is a 125cc commuter motorcycle designed for everyday use, known for its reliability, fuel efficiency, and low maintenance costs. It is powered by a 124.7 cc, air-cooled, single-cylinder engine that produces 10.7 PS of power and 10.6 Nm of torque, paired with a 5-speed manual transmission. The bike offers a claimed mileage of approximately 60 kmpl, making it an economical choice for daily commuting.",
        "isAvaliable": true,
        "createdAt": "2025-04-16T07:26:56.215Z",
    },
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
    },
    {
        "_id": "6847fe790fb481c5cfd92d94",
        "car": dummyCarData[4],
        "user": "6847f7cab3d8daecdb517095",
        "owner": "6847f7cab3d8daecdb517095",
        "pickupDate": "2025-06-11T00:00:00.000Z",
        "returnDate": "2025-06-12T00:00:00.000Z",
        "status": "confirmed",
        "price": 2500,
        "createdAt": "2025-06-10T09:44:25.410Z",
    },
    {
        "_id": "6847fe790fb481c5cfd92d94",
        "car": dummyCarData[5],
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