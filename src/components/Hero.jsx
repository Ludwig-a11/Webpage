import React from 'react'

import bgimg from '../assets/bg-bitcoin.png'


const Hero = () => {
  return (
    <div className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
      <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
        <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
          <p className='text-2xl '>Unique Sequencing & Education</p>
          <h1 className='py-3 text-5xl md:text-7xl font-bold'>Blockchain & Cryptocurrancy</h1>
          <p className='text-2xl'>This is our Tech brand</p>
          <button className='py-3 px-6 sm:w-[60%] my-4'>Get Started</button>
        </div>
        <div>
          <img className='w-full' src={bgimg} alt="/" />
        </div>
        <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[-5%] mx-1 md:left-1/2 
        transform md:-translate-x-1/2 bg-zinc-200 borderborder-slate-300 rounded-xl text-center shadow-xl'>
          <p>Blockchain Services</p>
          <div>
            <p><i class="fa-solid fa-chart-simple fa-xl"></i> Protocols</p>
            <p><i class="fa-solid fa-bolt fa-xl"></i> Non-Fungible Tokens</p>
            <p><i class="fa-solid fa-shield-halved fa-xl"></i> DeApps</p>
            <p><i class="fa-solid fa-coins fa-xl"></i> DeFi</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero