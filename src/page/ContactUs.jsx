import { East } from '@mui/icons-material'
import React from 'react'
import boat from '../assets/boat.webp'
import { Button } from '@mui/material'
import { NavLink } from 'react-router-dom'
const ContactUs = () => {
  return (
    <div className='flex justify-center items-center'> 
      <div className='w-[60dvw] h-[100dvh] p-10'>
        <h1 className='font-serif text-[100px]'>GET IN <br/>TOUCH</h1>
        <div className='mt-32'>
          <h1 className='text-lg'>Email:</h1>
          <p>arvin.anba@qpulse.teej</p>
        </div>
      </div>
      <div className='w-[40dvw] h-[100dvh] relative '>  
        <img src={boat} className='grayscale absolute z-0 h-[100dvh] flex justify-center bg-cover'/>
        <div className='absolute z-10 flex justify-center items-center w-full p-10'>
          <div>
            <h1 className='font-serif text-[60px]'>QUESTION?</h1>
            <h3 className='my-10 text-center'>Head to our FAQ page here</h3>
            <div className='flex justify-center items-center'>
             <NavLink><East className='text-white' /></NavLink>
            </div>
          </div>  
        </div>
      </div>
    </div>
  )
}

export default ContactUs