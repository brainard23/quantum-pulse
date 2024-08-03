import React from 'react';
import hero from '../assets/hero.png';

const Hero = () => {
  return (
    <>
      <section>
        <div className='relative h-[85dvh] w-[100dvw]'>
          <img src={hero} alt="Hero" className="object-cover h-full w-full" loading='lazy'/>
          <div className='absolute top-[30%] left-0 w-[60dvw] h-auto flex flex-col justify-center items-start bg-[#3D5772] bg-opacity-70 text-white md:pl-10 py-16 space-y-4'>
          <p className='md:text-[24px] text-sm mb-6 leading-tigh'>
             Quantum Pulse Consulting: Empowering Futures, Digitally Defined
          </p>
           <p className='text-lg md:text-4xl lg:text-5xl xl:text-[60px] font-bold leading-tight'>
              Progress & Innovate with Quantum Pulse
          </p>
          <p className='text-xs md:text-[21px] mt-4 leading-tight'>
            Where your business's digital aspirations become groundbreaking realities, setting you apart in today's competitive market.
          </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
