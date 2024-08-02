import React from 'react';
import hero from '../assets/hero.jpg';

const Hero = () => {
  return (
    <>
      <section>
        <div className='relative h-[85dvh] w-[100dvw]'>
          <img src={hero} alt="Hero" className="object-cover h-full w-full" loading='lazy'/>
          <div className='absolute top-[25%] left-0 w-[60dvw] h-[200px] flex-row justify-center items-center bg-[#415673] bg-opacity-65 text-white md:pl-10 py-4'>
             <p className='md:text-lg text-sm'>Quantum Pulse Consulting: Empowering Futures, Digitally Defined</p>
             <h1 className='text-sm text-wrap mt-6 md:text-5xl'> Progress & Innovate with Quantum Pulse </h1>
             <p className='md:text-xs text-[8px] mt-4'> Where your business's digital aspiration become groundbreaking realities. setting you apart in today's competitive market</p>
         </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
