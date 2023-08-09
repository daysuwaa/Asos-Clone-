import React from 'react';
import Flag from '../assets/flag.jpeg';

const Nav = () => {
  return (
    <div className='h-3'>
      <div className="hidden lg:flex justify-end space-x-3 bg-[#f8f9fa] pl-5 h-9 ">
        <a href="/" className='pr-4 pl-4 border-l border-[#6c757d]  text-sm font-normal pt-2 text-[#6c757d]'>Marketplace</a>
        <a href="/" className='pr-4 pl-4 border-l border-[#6c757d]  text-sm font-normal pt-2 text-[#6c757d]'>Help & FAQs</a>
        <a href="/" className='pr-5 pl-4 border-l border-[#6c757d] border-r   text-sm   pt-2 '>
          <img src={Flag} alt="Nigerian Flag" className='w-5 h-5 rounded-full' />
        </a>
      </div>
    </div>
  );
}

export default Nav;
