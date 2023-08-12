import React, { useState } from 'react';
import { AiOutlineSearch, AiOutlineHeart, AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { BsBag } from 'react-icons/bs';
import { useMediaQuery } from 'react-responsive'; 


const Navbar = () => {
  const isXsScreen = useMediaQuery({ maxWidth: 767 }); 
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="relative flex justify-between items-center h-[4rem] bg-[#2d2d2d]">
      {/* Left side */}
      <div className="flex items-center space-x-4">
        <div className="h-[4rem] text-white font-bold text-4xl py-2 pl-7 pr-6 tracking-tighter">
          <div onClick={handleNav} className='block md:hidden'>
            { <AiOutlineMenu size={35} className='pt-3' />}
          </div>
        </div>
        <div className="h-[4rem] text-white font-bold text-4xl py-2  tracking-tighter ">asos</div>
        <a href="/" className="text-white hidden lg:flex font-bold border-r h-[4rem] py-5 border-[#6c757d] tracking-wider pl-4 pr-7 text-sm">WOMEN</a>
        <a href="/" className="h-[4rem] hidden lg:flex text-white font-bold border-r py-5 tracking-wider border-[#6c757d] pl-5 pr-8 text-sm">MEN</a>
      </div>

      {/* Middle - Search bar */}
      <div className="flex-1 flex justify-center pl-6 relative">
        <input
          type="text"
          placeholder="Search for items and brands"
          className="border border-gray-400 rounded-full py-2 px-4 w-full tracking-tight pr-10 hidden lg:flex"
        />
        <AiOutlineSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 font-bold sm:text-white  md:text-white lg:text-black text-white -mr-3" size={25} />
      </div>

      {/* Right side */}
      <div className="flex items-center space-x-3 px-4">
        <BsPerson className="text-white font-bold " size={25} />
        <AiOutlineHeart className="text-white font-bold" size={25} />
        <BsBag className="text-white font-bold" size={25} />
      </div>

      {/* Mobile navigation */}
      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500 overflow-y-auto z-50' : 'fixed left-[-100%]'}>

      <div className="flex items-center">
          {isXsScreen &&  ( // Show close icon only on XS screens
            <div onClick={handleNav} className="block md:hidden">
              {nav ? <AiOutlineClose size={25}  /> : <AiOutlineMenu size={25} />}
            </div>
          )}
        </div>
        <ul className='uppercase p-4  font-bold'>
         <li>
          <a href='/' className='pr-[4rem] pl-8 border-b-2 border-black' >WOMEN</a> <span> <a href='/' className='pr-[2rem] pl-8'>MEN</a> </span>
         </li>
         <br></br>

         <li className='bg-gray-200 w-full h-12 pt-2 pl-2 tracking-widest'>
         <a href='/' >home</a>
         </li>
         <br></br>

         <li className='bg-pink-300 w-full h-[6rem] pt-4 pl-2 tracking-widest'>
         <a href='/'>UP TO 50% OFF</a>
         <p className=' font-light tracking-widest '> Certified</p>
         <p className=' font-light tracking-widest '>Bangers!</p>
         </li>
         <br></br>

         <li className='bg-gradient-to-r from-green-400 to-yellow-400 w-full h-[6rem] pt-9 pl-2 tracking-widest'>
         <a href='/'>UP TO 70% OFF!</a>
         </li>
         <br></br>

         <li className=' bg-gray-200 w-full h-[6rem] pt-9 pl-2 tracking-widest'>
         <a href='/'>NEW IN</a>
         </li>
        <br></br>

         <li className='bg-gray-200 w-full h-[6rem] pt-9 pl-2 tracking-widest'>
         <a href='/'>CLOTHING</a>
         </li>
        <br></br>

         <li className='bg-gray-200 w-full h-[6rem] pt-9 pl-2 tracking-widest'>
         <a href='/'>DRESSES</a>
         </li>
         <br></br>

         <li className='bg-gray-200 w-full h-[6rem] pt-9 pl-2 tracking-widest'>
         <a href='/'>BEST SELLERS</a>
         </li>
         <br></br>

         <li className='bg-gray-200 w-full h-[6rem] pt-9 pl-2 tracking-widest'>
         <a href='/'>SHOES</a>
         </li>
         <br></br>

         <li className='bg-gray-200 w-full h-[6rem] pt-9 pl-2 tracking-widest'>
         <a href='/'>TRAINERS</a>
         </li>
         <br></br>

         <li className='bg-gray-200 w-full h-[6rem] pt-9 pl-2 tracking-widest'>
         <a href='/'>ACCESSORIES</a>
         </li>
         <br></br>

         <li className='bg-gray-200 w-full h-[6rem] pt-9 pl-2 tracking-widest'>
         <a href='/'>SPORTSWEAR</a>
         </li>
         <br></br>

         <li className='bg-gray-200 w-full h-[6rem] pt-9 pl-2 tracking-widest'>
         <a href='/'>SUMMER</a>
         </li>
         <br></br>

         <li className='bg-black  text-white lg:text-5xl md:text-5xl sm:text-4xl w-full h-[6rem] pt-2 pl-2 tracking-widest text-2xl'>
         <h1>Topshop</h1>
         </li>
         <br></br>

         <li className='bg-gray-200 w-full h-[6rem] pt-9 pl-2 tracking-widest'>
         <a href='/'>FACE + BODY</a>
         </li>
         <br></br>

         <li className='bg-gray-200 w-full h-[6rem] pt-9 pl-2 tracking-widest'>
         <a href='/'>BRANDS</a>
         </li>
         <br></br>

         <li className='bg-gray-200 w-full h-[6rem] pt-4 pl-2 tracking-widest'>
         <a href='/'>Marketplace</a>
         <p className=' font-light tracking-widest '>vintage & new</p>
         <p className=' font-light tracking-widest'>brands</p>

         </li>
         <br></br>

         <li className='bg-gray-200 w-full h-[6rem] pt-6 pl-2 tracking-widest'>
         <a href='/'>OUTLETS</a>
         <p className=' font-light tracking-widest '>up to 70% off</p>
         </li>

        </ul>

       
      </div>
    </nav>
  );
}

export default Navbar;
