import { Button } from '@mui/material'
import React from 'react'
import aboutImg from '../assets/about.jpg'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
const AboutUs = () => {
  return (
    <div className='h-[100dvh] py-16'>
      <div className='flex justify-end pr-10 mb-10'>
        <Button variant='outlined' style={{color: '#ffff', borderColor: '#ffff', width: 150, padding: 8, textTransform: 'capitalize'}}>Services</Button>
      </div>
      <div className="flex justify-center items-center">
        <div className='w-[50dvw]'>
            <img src={aboutImg} className='w-[50dvw] grayscale' /> 
        </div>
        <div  className='w-[50dvw] p-10 '>
            <h1 className=' text-center mb-10'>Financing Reporting</h1>
            <p className='text-sm'> 
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, quis! Nam, illo dolorem blanditiis culpa amet rerum ullam alias ad et numquam, debitis iusto dignissimos tempore dicta repellendus, nulla enim impedit consequatur ea totam! Suscipit nobis voluptatum obcaecati repellendus vero amet consectetur esse laborum sed! Quia qui eum dicta sequi, placeat, quas vel sed vitae molestiae temporibus voluptas. Rem, recusandae! Nostrum aut, praesentium culpa distinctio perferendis illum voluptates quasi ab dolores amet a quia dolorum mollitia iste unde atque blanditiis facere. Nobis est illum maiores at saepe doloremque, accusantium labore atque suscipit, magnam debitis iusto, omnis ut? Voluptatum, iusto velit?
            </p>
            <div className='flex justify-center items-center mt-12'>
             <Button  style={{color: '#ffff', textTransform: 'capitalize'}}>Learn More <KeyboardArrowRightIcon /></Button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs