import React from 'react';
import Asos from '../assets/asos.avif';

const Middlee = () => {
  return (
    <div className="relative h-screen">
      <img src={Asos} alt="asos pic" className="object-cover h-full w-full" />
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <p className="text-black font-bold text-center p-4 bg-white text-6xl tracking-wide">
          This is ASOS
        </p>
        <p className="bg-white text-2xl font-light tracking-wide">
          ASOS DESIGN and 850+ brands
        </p>
        <div className="flex bg-white uppercase font-bold h-[3rem] pt-2">
          <button className="mr-2">Shop Women</button>
          <div className="w-6"></div>
          <button className="ml-2">Shop Men</button>
        </div>
      </div>
    </div>
  );
};

export default Middlee;
