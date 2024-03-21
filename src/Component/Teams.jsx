import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import tems from '../assets/team.png';
import v1 from '../assets/Vector.png';
import v2 from '../assets/Vector (1).png';
import v3 from '../assets/Vector (2).png';
import { SiAdobexd } from "react-icons/si";
const Teams = () => {
    return (
        <>
            <div className='py-24 max-w-container mx-auto'>
                <div>
                    <h1 className='font-inter text-comon font-semibold text-5xl'>Built for all kinds of teams</h1>
                </div>
                <div className='flex justify-between gap-14 mt-10'>
                    <p className='font-inter text-comon text-sm font-normal'>UX & Design</p>
                    <p className='font-inter text-comon text-sm font-normal'>Marketing</p>
                    <p className='font-inter text-comon text-sm font-normal'>Product Management</p>
                    <p className='font-inter text-comon text-sm font-normal'>Engineering</p>
                    <p className='font-inter text-comon text-sm font-normal'>Consultants</p>
                    <p className='font-inter text-comon text-sm font-normal'>Agile Coaches</p>
                    <p className='font-inter text-comon text-sm font-normal'>Sales</p>

                </div>

                <div className='mt-14 flex justify-between'>
                    <div className='w-2/5'>
                    <div className='flex gap-3.5'>
                    <FaCheck className='text-2xl' />
                    <p className='text-lg font-inter text-second '>Build low-fi wireframes</p>
                    </div>
                    
                    <div className='flex gap-3.5 mt-4'>
                    <FaCheck className='text-2xl' />
                    <p className='text-lg font-inter text-second w-[250px] '>Involve stakeholders in the design process</p>
                    </div>


                    <div className='flex gap-3.5 mt-4'>
                    <FaCheck className='text-2xl' />
                    <p className='text-lg font-inter text-second w-[250px] '>Run engaging design workshops</p>
                    </div>

                        <p className='mt-10 font-normal text-lg font-inter text-[#4262FF] flex gap-4'>
                            Learn more
                            <FaArrowRight className='mt-1 text-lg' />
                        </p>

                        <div className='mt-16'>
                        <p className='text-lg font-inter font-normal text-second'>Integrate your favorite tools</p>
                             <div className='mt-8 flex justify-between w-[283px]'>
                                 <img src={v1}/>
                                 <SiAdobexd className='text-[#470137] text-2xl' />
                                 <img src={v2}/>
                                 <img src={v3}/>
                             </div>
                        </div>
                    </div>



                    <div className='w-3/5 '>
                        <img src={tems} />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Teams