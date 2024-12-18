import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi placeat nostrum necessitatibus quasi libero laboriosam veritatis culpa cum eum dolorum labore qui, animi quia! Labore cum culpa incidunt odio aperiam! Lorem ipsum dolor
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
        
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About Us</a></li>
                <li><a href='#'>Delivery</a></li>
                <li><a href='#'>Privacy Policy</a></li>

            </ul>
        </div>    
        <div>

            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+1-212-456-789</li>
                <li>contact@foreveryou.com</li>

            </ul>
        </div>    
      </div>

      <div>
        <hr />
        <p className= 'py-5 text-sm text-center '>Copyright 2024@ forever.com - ALL Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
