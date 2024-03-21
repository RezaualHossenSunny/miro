import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import baner from '../assets/work.png'
const Work = () => {
  return (
    <>
        <div className='max-w-container mx-auto  flex'>
        <div className='w-3/6 py-24'>
            <h1 className='text-5xl font-bold text-comon font-inter w-[440px] leading-[56px]'>Work together, wherever you work</h1>

            <p className='mt-4 text-lg font-inter text-second leading-6 w-[453px]'>In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are.</p>


            <p  className='mt-10 font-normal text-lg font-inter text-[#4262FF] flex gap-4'>
            Learn more
            <FaArrowRight className='mt-1 text-lg' />
            </p>
            <p className='w-[100px] h-[1px] bg-[#4262FF] '></p>
        </div>
        <div className='w-3/6'>
            <img src={baner}/>  
        </div>

        </div>
    </>
  )
}

export default Work