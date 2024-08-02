import React from 'react'
import { homeNav } from '../lib/navigation'
import Navigation from './Navigation'
import qpc from '../assets/qpc.webp'
const Header = () => {
  return (
    <div className='bg-[#040E18] w-full flex justify-between items-center p-10 h-[15dvh]'>
        <div className=''  >
            <img src={qpc} width={200} height={200} alt='quantum pulse consulting logo' />
        </div>
        <div>
          <Navigation />
        </div>
    </div>
  )
}

export default Header