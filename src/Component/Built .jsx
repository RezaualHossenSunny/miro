import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import ways from '../assets/ways.png'
export const Built = () => {
    return (
        <>
            <div className='py-28 max-w-container mx-auto'>
                <div>
                    <h1 className='font-inter text-comon font-semibold text-5xl'>Built for the way you work</h1>
                </div>
                <div className='flex justify-between gap-14 mt-10'>
                    <p className='font-inter text-comon text-sm font-normal'>Brainstorming</p>
                    <p className='font-inter text-comon text-sm font-normal'>Diagramming</p>
                    <p className='font-inter text-comon text-sm font-normal'>Meetings & Workshops</p>
                    <p className='font-inter text-comon text-sm font-normal'>Scrum Events</p>
                    <p className='font-inter text-comon text-sm font-normal'>Mapping</p>
                    <p className='font-inter text-comon text-sm font-normal'>Research & Design</p>
                    <p className='font-inter text-comon text-sm font-normal'>Strategic Planning</p>

                </div>

                <div className='mt-14 flex justify-between'>
                    <div className='w-2/5'>
                        <p className='font-inter text-comon text-lg text-normal'>Brainstorming</p>
                        <p className='w-[302px] font-inter text-second text-lg text-normal mt-10'>
                            Unleash creative ideas and build on them with the help of sticky notes, images, mind maps, videos, drawing capabilities — the list goes on.
                        </p>
                        <p className='mt-10 font-normal text-lg font-inter text-[#4262FF] flex gap-4'>
                            Learn more
                            <FaArrowRight className='mt-1 text-lg' />
                        </p>
                    </div>



                    <div className='w-3/5 '>
                        <img src={ways}/>
                    </div>

                </div>
            </div>
        </>
    )
}
