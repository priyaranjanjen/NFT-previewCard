import { useState } from 'react';

import heroImage from '../images/image-equilibrium.jpg';
import clock from '../images/icon-clock.svg';
import ethereum from '../images/icon-ethereum.svg';
import avatar from '../images/image-avatar.png';
import eye from '../images/icon-view.svg';

import './App.css'

export default function App() {
  const [show, setShow] = useState(false)
  return (
    <div className='bg-neutral-very-dark-blue-bg h-screen text-white flex justify-center items-center font-outfit'>
      <div className='flex flex-col gap-4 mx-6 bg-neutral-very-dark-blue-card p-6 rounded-2xl md:w-400px shadow-xl'>

        {/* Hero Image Container */}
        <div className='relative'>
          <img 
            src={heroImage} 
            alt="heroImage" 
            className={`h-auto rounded-2xl ${show? '' : 'opacity-30'}`}
          />
          {/* Eye Icon */}
          {show===false && 
            <div className='absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer'>
              <img src={eye} alt="eye" className='w-12 h-12' onClick={() => setShow(prev => !prev)}/>
            </div>
          }

        </div>

        <section className='flex flex-col gap-3'>
          <h1 className='text-xl font-semibold cursor-pointer hover:text-primary-cyan'>Equilibrium #3429</h1>
          <p className='text-sm md:text-lg text-primary-blue'>Our Equilibrium collection promotes balance and calm.</p>
          <div className='flex justify-between text-sm md:text-base'>
            <span className='flex items-center gap-2'>
              <img src={ethereum} alt="ethereum" />
              <span className='text-primary-cyan font-semibold'>0.041ETH</span>
            </span>
            <span className='flex items-center gap-2'>
              <img src={clock} alt="clock" />
              <span className='text-primary-blue'>3 days left</span>
            </span>
          </div>
        </section>

        <hr className='border-neutral-very-dark-blue-line'/>

        <div className='text-sm flex items-center gap-3 md:gap-4 tracking-wider '>
          <img src={avatar} alt="avatar" className='h-auto w-9 bg-white border-2 rounded-full'/>
          <p className='cursor-pointer hover:text-primary-cyan'><span className='text-primary-blue md:text-base'>Creation of</span> Jules Wyvern</p>
        </div>

      </div>
    </div>
  )
}
