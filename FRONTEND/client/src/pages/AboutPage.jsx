import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react'

const AboutPage = () => {
  return (
    <motion.div 
    initial={{y: 40, opacity: 0}}
    animate={{y: 0, opacity: 1}}
    transition={{duration: 1, delay: 0.5, ease: "easeOut"}}
    className='flex flex-col items-center py-35 px-6 md:px-16 
    lg:px-24 xl:px-32'>
            <section className="flex flex-col md:flex-row items-center justify-center gap-10 max-md:px-4">
                <div className="relative shadow-2xl shadow-indigo-600/40 rounded-2xl overflow-hidden shrink-0">
                    <img className="max-w-md w-full object-cover rounded-2xl"
                        src={assets.about}
                        alt="" />
                    <div className="flex items-center gap-1 max-w-72 absolute bottom-8 left-8 bg-white p-4 rounded-xl">
                        <div className="flex -space-x-4 shrink-0">
                            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200" alt="image"
                                className="size-9 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-1" />
                            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200" alt="image"
                                className="size-9 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-[2]" />
                            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop"
                                alt="image"
                                className="size-9 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-[3]" />
                            <div
                                className="flex items-center justify-center text-xs  text-white size-9 rounded-full border-[3px] border-white bg-indigo-600 hover:-translate-y-1 transition z-[4]">
                                50+
                            </div>
                        </div>
                        <p className="text-sm font-medium text-slate-800">Join our developer community</p>
                    </div>
                </div>
                <div className="text-sm text-slate-600 max-w-lg">
                    <h1 className="text-xl uppercase font-semibold text-slate-700">What we do?</h1>
                    <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-indigo-600 to-[#DDD9FF]"></div>
                    <p className="mt-8">Welcome to RideIntelliX, your smart mobility partner for hassle-free urban travel. We believe commuting should be simple, affordable, and eco-friendly. 
                        That’s why we’ve built a platform that lets you rent bikes and scooters anytime, anywhere—with just a few taps.</p>
                    <p className="mt-4">Our mission is to transform the way people move around cities by offering convenient, sustainable, and budget-friendly ride options. Whether you’re heading to work, 
                        exploring the city, or running errands, we make sure your journey is smooth, safe, and enjoyable.</p>
                    <p className="mt-4">At RideIntelliX, we combine smart technology with green transport solutions to reduce traffic congestion and carbon emissions. Every ride with us is a step toward a cleaner, smarter, and more connected city.
We’re not just a rental service — we’re a community of riders shaping the future of mobility.</p>
                    <p className='mt-8'>
                        <b>Ride smart. Ride green. Ride with RideIntelliX.</b> 
                    </p>
                    <button className="flex items-center gap-2 mt-8 hover:-translate-y-0.5 transition bg-gradient-to-r from-indigo-600 to-[#8A7DFF] py-3 px-8 rounded-full text-white">
                        <span>Read more</span>
                        <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12.53 6.53a.75.75 0 0 0 0-1.06L7.757.697a.75.75 0 1 0-1.06 1.06L10.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06zM0 6v.75h12v-1.5H0z"
                                fill="#fff" />
                        </svg>
                    </button>
                </div>
            </section>
    </motion.div>
  )
}

export default AboutPage