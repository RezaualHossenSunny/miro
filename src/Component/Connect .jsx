import React from 'react'
import contacet from '../assets/contacet.png';
import { FaArrowRight } from "react-icons/fa";
const Connect = () => {
    return (
        <>
            <div className='max-w-container mx-auto flex '>
                <div className='w-2/4 py-20'>
                    <img src={contacet} />
                </div>

                <div className='w-2/4 py-40 ml-36'>
                    <h1 className='font-inter text-comon font-bold text-5xl w-[345px]'>Connect
                        your tools,
                        close your tabs</h1>
                    <p className='mt-8 text-second font-inter text-lg'>
                        Whether you want to edit your Google Docs, resolve Jira issues, or collaborate over Zoom, Miro has 100+ integrations with tools you already use and love.
                    </p>


                    <p className='mt-10 font-normal text-lg font-inter text-[#4262FF] flex gap-4'>
                        Learn more
                        <FaArrowRight className='mt-1 text-lg' />
                    </p>
                    <p className='w-[100px] h-[1px] bg-[#4262FF] '></p>
                </div>

            </div>
        </>
    )
}

export default Connect 