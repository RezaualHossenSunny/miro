import React from 'react'
import baner from '../assets/baner.png'
import icon from '../assets/Frame.png'
import icon1 from '../assets/Frame (1).png'

import f from '../assets/f1.png'
import f1 from '../assets/f2.png'
import f2 from '../assets/f3.png'
const Baner = () => {
  return (
    <>
        <div className='max-w-container mx-auto flex py-32'>
            <div className='w-2/4'>
                <h1 className='text-comon text-5xl font-bold font-inter w-[376px] leading-[56px]tracking-wider'>Take ideas from better to best</h1>  

                <p className='text-comon font-inter mt-4 text-lg w-[428px] font-normal'>Miro is your team's visual platform to connect, collaborate, and create — together.</p>
                 <div className='mt-8 py-4   pl-6  pr-10 rounded-[32px] border-[#9B99AF] border-2 w-[440px]'>
                  <p className='font-inter text-[#5F5C80] font-normal text-base'>Enter your work email</p>
                 </div>

                 <div className='mt-4 py-4 bg-[#4262FF]   pl-6  pr-10 rounded-[32px] border-[#9B99AF] border-2 w-[440px]'>
                  <p className='font-inter text-white font-normal text-base text-center'>Sign up free →</p>
                 </div>

                 <p className='mt-1 font-inter text-rgba  font-normal text-base '>Collaborate with your team within minutes</p>
                
                <div className='flex mt-10 w-[350px] bg-[#F5F5F7] rounded-lg'>
                <div>
                <div className='flex py-3.5 px-3.5 gap-1'>
                   <img src={icon}/>  
                   <img src={icon}/>  
                   <img src={icon}/>  
                   <img src={icon}/>  
                   <img src={icon1}/>  
                   
                </div>
                <div>
                    <p className=' font-normal px-3.5 text-inter text-comon text-xs'>Based on 5149+ reviews:</p>
                   </div>
                </div>

                <div className='flex ml-3 gap-5  '>
                 <img src={f}/>
                 <img src={f1}/>
                 <img src={f2}/>
                </div>

                </div>

            </div>
            <div className='w-2/4 bg-baner bg-cover bg-no-repeat bg-center'>
              {/* <img className='w-full' src={baner}/> */}
            </div>
        </div>
    </>
  )
}

export default Baner