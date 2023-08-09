import React from 'react';

const Section = () => {
  return (
    <div className='bg-pink-300 h-[50px] hidden md:block tracking-widest'>
      <div className='flex justify-between items-center h-full px-4'>
        <button className='text-sm font-bold border-2  border-black px-2 py-1 rounded-none'>Women</button>
        <p className='text-sm font-bold text-center'>UP TO 50% OFF<br></br>CERTIFIED BANGERS!
        </p>
        <button className='text-sm font-bold border-2 border-black px-2 py-1 rounded-none'>Men</button>
      </div>
    </div>
  );
};

export default Section;
