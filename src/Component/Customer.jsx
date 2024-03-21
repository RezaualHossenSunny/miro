import React from 'react'
import text1 from '../assets/text-1.png';
import text2 from '../assets/text-2.png';
import text3 from '../assets/text-3.png';
import client1 from '../assets/client.png'
import client2 from '../assets/client2.png'
import client3 from '../assets/clent3.png'
const Customer = () => {
  return (
    <>
        <div className='max-w-container mx-auto py-20'>
            <div>
                <h1 className='text-comon font-inter font-bold text-5xl text-center'>Loved by the world's best teams</h1>
            </div>

            <div className='mx-auto mt-8 py-4 px-8 border-2 border-[#4262FF] w-[282px] rounded-3xl'>
                <p className='font-inter text-center font-normal text-[#4262FF]'>See all customer stories →</p>
            </div>

            <div className='flex justify-between mt-10'>
             <div className='w-1/4'>
            <img src={text1}/>
            <p className='mt-8 font-inter text-second text-lg font-normal w-[291.684px]'>
            “When the pandemic hit, those of us who thrive on in-person collaboration were worried that our creativity and productivity would suffer. Miro was the perfect tool to help us with collaboration, whiteboarding, and retrospectives while remote.”
            </p>
               
               <div className='mt-14 flex gap-5'>
               <img src={client1}/>
                <div>
         <p className='font-inter text-second text-sm font-normal'>Roxanne Mustafa</p>
         <p className='font-inter text-second text-sm font-normal'>Design Team Lead at VMware</p>

                </div>

               </div>
             </div>


             <div className='w-1/4'>
            <img src={text2}/>
            <p className='mt-8 font-inter text-second text-lg font-normal w-[291.684px]'>
            “Miro helps solve one of the major gaps in product design: how to manage tasks across product designers whose projects are in different tools.”
            </p>
               
               <div className='mt-40 flex gap-5'>
               <img src={client2}/>
                <div>
         <p className='font-inter text-second text-sm font-normal'>Roxanne Mustafa</p>
         <p className='font-inter text-second text-sm font-normal'>Design Team Lead at VMware</p>

                </div>

               </div>
             </div>



             <div className='w-1/4'>
            <img src={text3}/>
            <p className='mt-8 font-inter text-second text-lg font-normal w-[291.684px]'>
            “As we used Miro we moved from skepticism to belief to innovation, and now we have a tool that’s at the core of what we do and will continue to extend into the future.”
            </p>
               
               <div className='mt-36 flex gap-5'>
               <img src={client3}/>
                <div>
         <p className='font-inter text-second text-sm font-normal'>Roxanne Mustafa</p>
         <p className='font-inter text-second text-sm font-normal'>Design Team Lead at VMware</p>

                </div>

               </div>
             </div>
            </div>
        </div>
    </>
  )
}

export default Customer