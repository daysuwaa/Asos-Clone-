import React from 'react'
import Nigeria from '../assets/flag.jpeg';

const Footer = () => {
  return (
    <div className='hidden sm;hidden md:block lg:block'>
    <div className='lg:col-span-2 flex justify-between mt-6 uppercase bg-gray-200 pt-5 '>
    <div className=' pl-[80px]'>
        <h6 className='font-bold text-sm text-gray-600'>help & information</h6>
        <ul className=' text-gray-500 font-md'>
            <li className='py-2 text-xs'>help</li>
            <li className='py-2 text-xs'>track order</li>
            <li className='py-2 text-xs'>delivery and returns</li>
            <li className='py-2 text-xs'>sitemap</li>
        </ul>
    </div>
    <div>
        <h6 className='font-bold text-sm text-gray-600'>about asos</h6>
        <ul className=' text-gray-500 font-md'>
            <li className='py-2 text-xs'>about us</li>
            <li className='py-2 text-xs'>careers at asos</li>
            <li className='py-2 text-xs'>corporate responsibility</li>
            <li className='py-2 text-xs'>investors' site</li>
        </ul>
    </div>
    <div>
        <h6 className='font-bold text-sm text-gray-600'>MORE FROM ASOS</h6>
        <ul className=' text-gray-500 font-md'>
            <li className='py-2 text-xs'>Mobile and ASOS  </li>
            <li className='py-2 text-xs'>asos marketplace</li>
            <li className='py-2 text-xs'>gift vouchers</li>
            <li className='py-2 text-xs'>black friday</li>
            <li className='py-2 text-xs'>asos X thrift +</li>
        </ul>
    </div>
    <div className='pr-[80px]'>
        <h6 className='font-bold text-sm text-gray-600'>Shopping from:</h6>
        <ul className=' text-gray-500 font-md'>
            <li className='py-2 text-xs'>You are in <span><img src={Nigeria} alt="Nigerian Flag" className='w-5 h-5 rounded-full' /> </span>
            </li>
        </ul>
    </div>
    </div>
    </div>
    
  )
}

export default Footer