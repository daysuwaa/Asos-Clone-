import React from 'react'
import Facebook from '../assets/facebook.png';
import Snapchat from '../assets/snapchat.png';
import Instagram from '../assets/insta.png';
import Master from '../assets/MasterCard.png';
import Paypal from '../assets/PayPal-Logo.png';
import Visa from '../assets/Visa-Logo.png';
import American from '../assets/american.jpeg';


const Icons = () => {
  return (
    <div className='h-[35px] hidden sm;hidden md:block lg:block'>
      <div className='flex justify-center mt-[10px] rounded-full '>
        <img src={Facebook} alt='Facebook' className='w-[30px] h-[30px] rounded-full mr-5' />
        <img src={Instagram} alt='Instagram' className='w-[30px] h-[30px] rounded-full mr-5 ' />
        <img src={Snapchat} alt='Snapchat' className='w-[30px] h-[30px] rounded-full mr-5' />
        <div className='border-r border-black'></div>
        <img src={Visa} alt='Visa' className='w-[40px] h-[30px] mr-6 ml-5' />
        <img src={Master} alt='Mastercard' className='w-[40px] h-[30px] mr-4 ' />
        <img src={Paypal} alt='paypal' className='w-[40px] h-[30px] mr-4 ' />
        <img src={American} alt='american express' className='w-[40px] h-[30px] mr-4 ' />
      </div>
    </div>
   
  )
}

export default Icons;