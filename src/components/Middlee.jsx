import React from 'react';
import Asos from '../assets/asos.avif';
import Aso from '../assets/asos2.avif';

const Middlee = () => {
  return (
    <div className="relative h-screen">
      <img src={Asos} alt="asos pic" className="object-cover h-full w-full md:block lg:block sm:hidden hidden" />
      <img src={Aso} alt="asos pic" className="object-cover h-full w-full lg:hidden md:hidden sm:block block" />
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <p className="text-black font-bold text-center p-4 bg-white lg:text-5xl tracking-wide sm:text-4xl text-3xl">
          This is ASOS
        </p>
        <p className="bg-white sm:text-4xl text-md font-light lg:text:4xl tracking-wide h-8 pt-1 sm:h-[5rem] sm:pt-4">
          ASOS DESIGN and 850+ brands
        </p>
        <br></br>

         <div className="grid md:grid-cols-2 gap-4 sm:grid-cols-1  h-[3rem] pt-2 uppercase  ">
          <button className="md:block bg-white font-bold tracking-wider uppercase h-[2.5rem] w-[12rem] ">Shop Women</button>
          <button className="md:block bg-white font-bold tracking-wider uppercase h-[2.5rem] w-[12rem]" >Shop Men</button>
         </div>
     </div>
    </div>
  );
};

export default Middlee;
