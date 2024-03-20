import React from 'react'
import user from '../assets/user1.png'
import user1 from '../assets/user2.png'
import user2 from '../assets/user-3.png'
import user3 from '../assets/user4.png'
const User = () => {
  return (
    <div>
        <div className='max-w-container mx-auto py-32'>
        <p className='font-inter text-rgba text-center  font-semibold  text-lg'>Trusted by 45M+ users</p>
        <div  className='flex justify-between mt-32'>
         <img src={user} />
         <img src={user1} />
         <img src={user2} />
         <img src={user3} />
        </div>
        </div>
    </div>
  )
}

export default User