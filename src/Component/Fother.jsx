import React from 'react'
import img from '../assets/fb.png'
import img1 from '../assets/you.png'
import img2 from '../assets/tw.png';

const Fother = () => {
    return (
        <div>
            <div className='mt-8 bg-comon'>
                <div className='max-w-container mx-auto py-24'>
                    <div className='flex justify-between'>
                        <div className='w-2/5'>
                            <h2 className='font-inter text-[#FFF] text-2xl font-extrabold'>Scan. Detect. Remove.</h2>
                            <div className='mt-12 flex gap-6'>
                                <img src={img} />
                                <img src={img1} />
                                <img src={img2} />

                            </div>

                            <div className='mt-14 flex gap-6'>
                                <div>
                                    <p className='font-inter text-[#fff] font-normal text-xs'>Privacy Policy</p>
                                    <p className='w-[73px] bg-[#fff] h-[1px]'></p>
                                </div>
                                <div>
                                    <p className='font-inter text-[#fff] font-normal text-xs'>Terms of Service</p>
                                    <p className='w-[88px] bg-[#fff] h-[1px]'></p>
                                </div>
                            </div>

                            <p className='mt-12 font-inter text-xs font-normal w-[306px] text-[#fff]'>Copyright © 2022 Certo Software Limited | Registered in England & Wales No. 10072356</p>

                            <p className='mt-6 font-inter text-xs font-normal w-[306px] text-[#fff]'>Designed & developed by Bigger Picture</p>


                        </div>




                        <div className='w-1/5'>
                            <h1 className='font-inter text-[#fff] text-4xl font-extrabold not-italic'>Miro.</h1>
                            <p className='bg-[#fff]  mt-6  w-[178px] h-[2px]'></p>



                            <div className='mt-14'>

                            <div className='flex gap-6'>
                            <p className='bg-[#FFC247] h-[1px] w-[20px] mt-3'></p>
                            <p className='text-[#FFC247] font-inter  font-extrabold  '>iPhone</p>

                            </div>

                            <div className='flex gap-6 mt-5'>
                            <p className='bg-[#FFC247] h-[1px] w-[20px] mt-3'></p>
                            <p className='text-[#FFC247] font-inter  font-extrabold  '>Android</p>

                            </div>

                            <div className='flex gap-6 mt-5'>
                            <p className='bg-[#FFC247] h-[1px] w-[20px] mt-3'></p>
                            <p className='text-[#FFC247] font-inter  font-extrabold  '>Help</p>

                            </div>

                            <div className='flex gap-6 mt-5'>
                            <p className='bg-[#FFC247] h-[1px] w-[20px] mt-3'></p>
                            <p className='text-[#FFC247] font-inter  font-extrabold  '>About</p>

                            </div>
                            <div className='flex gap-6 mt-5'>
                            <p className='bg-[#FFC247] h-[1px] w-[20px] mt-3'></p>
                            <p className='text-[#FFC247] font-inter  font-extrabold  '>Insights</p>

                            </div>

                            </div>




                        </div>
                        <div className='w-2/5  '>
                            <div className='bg-[#FFC247] w-[436px] h-[232.391px] rounded-2xl bg-fother bg-no-repeat bg-cover bg-center '>
                            <div className='py-8 px-11'>
                            <h3 className='font-inter text-comon font-extrabold text-2xl '>Sign up to our newsletter</h3>

                            <p className='mt-5 font-inter w-[358px] text-base font-normal'>Receive the latest mobile security news, exclusive discounts & offers straight to your inbox!</p>
                             
                             <div className='mt-4 flex'>
                             <p  className='w-[254px] py-4 bg-[#fff] rounded-s-xl pl-2 text-second font-inter text-base font-normal'>Email address</p>
                             <p  className='w-[109px] py-4 bg-comon rounded-e-xl text-center text-[#fff] font-inter font-bold text-lg'>Submit</p>

                             </div>
                            </div>
                            </div>
                        </div>


                    </div>

                    <p className='mt-14 w-[549px] text-[#fff] font-inter font-normal text-xs'>Apple, the Apple logo, and iPhone are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Android, Google Play and the Google Play logo are trademarks of Google LLC.</p>

                </div>

            </div>
        </div>
    )
}

export default Fother