import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react'

const Newsletter = () => {
  return (
     <div className="md:grid md:grid-cols-2 max-w-4xl bg-white mx-4 md:mx-auto rounded-xl max-md:px-4 my-10 mb-40">
            <img src={assets.car_image5}
                alt="newsletter" className="hidden md:block w-full max-w-lg rounded-xl" />
            <div className="relative flex items-center justify-center">
                <button className="absolute top-6 right-6" aria-label="Close">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 2 2 13M2 2l11 11" stroke="#1F2937" strokeOpacity=".7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                <motion.div 
                initial={{y: 30, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: 0.8, ease: 'easeOut'}}
                viewport={{once: true, amount: 0.3}}

                className="max-md:py-20 px-6 md:px-10 text-center">
                    <motion.h1 
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{delay: 0.2, duration: 0.5}}
                    
                    className="text-3xl font-bold">
                        Never Miss a Deal!
                    </motion.h1>
                    <motion.p 
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{delay: 0.3, duration: 0.5}}
                    className="mt-4 text-gray-500">
                        Be the first to get the latest offers, new arrivals, and exclusive discounts
                    </motion.p>
                    <motion.form 
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{delay: 0.4, duration: 0.5}}
                    className="mt-8 flex">
                        <input type="email" placeholder="Your email address"
                            className="w-full outline-none rounded-l-md border border-r-0 border-gray-300 p-4 text-gray-900" required />
                        <button type="submit" className="rounded-r-md bg-primary hover:bg-primary-dull px-7 py-2 text-white">
                            Subscribe
                        </button>
                    </motion.form>
                </motion.div>
            </div>
        </div>
  )
}

export default Newsletter
