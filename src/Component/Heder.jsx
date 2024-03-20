import React from 'react'
import logo from '../assets/logo.png'
import { FaAngleDown } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
const Heder = () => {
  return (
    <>
      <div className="flex">
        <div className='w-3/6 flex'>
          <div className='ml-8 py-6'>
            <img src={logo} />
          </div>
          <div className='flex px-8 gap-8 py-8'>
            <div className='flex'>
              <p className='text-comon text-base font-normal font-inter'>Product</p>
              <FaAngleDown className='mt-3 ml-3' />
            </div>

            <div className='flex'>
              <p className='text-comon text-base font-normal font-inter'>Solutions</p>
              <FaAngleDown className='mt-3 ml-3' />
            </div>

            <div className='flex'>
              <p className='text-comon text-base font-normal font-inter'>Resources</p>
              <FaAngleDown className='mt-3 ml-3' />
            </div>

            <div className='flex'>
              <p className='text-comon text-base font-normal font-inter'>Enterprise</p>

            </div>

            <div className='flex'>
              <p className='text-comon text-base font-normal font-inter'>Pricing</p>

            </div>



          </div>
        </div>

        <div className='w-2/4 flex justify-end '>
         <div className='w-1/3 py-8'>
         <div className=' flex  '>
            <div className='flex '>
            <TbWorld  className='text-2xl'/>
            <p className='text-comon text-base font-normal font-inter ml-2'>EN</p>
            </div>

            <div className='flex '>
           
            <p className='text-comon text-base font-normal font-inter ml-4 '>Contact Sales</p>
            </div>

            <div className='flex '>
           
           <p className='text-comon text-base font-normal font-inter ml-6 '>Login</p>
           </div>

          </div>

         </div>

         <div className='w-[250px] flex py-5   '>
           
         <p className='text-[#FFF]  text-base font-normal font-inter rounded-3xl  py-4 px-6 bg-[#4262FF] '>Sign up free →</p>
         

         </div>

         
          
        </div>







      </div>
    </>
  )
}

export default Heder