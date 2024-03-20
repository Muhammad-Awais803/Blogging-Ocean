import Blogs from '@/app/blogs/page';
import Link from 'next/link';
import React from 'react';


const NavBar = () => {
  return (
    <div className='flex justify-between items-center py-3 w-full'>
       <div className="flex h-12 items-center justify-center text-lg md:text-2xl ">
            <h2 className="font-bold ">Blogging</h2>
            <h2 className="">Ocean</h2>
        </div>
        <ul className="flex lg:gap-5 items-center 2xl:text-xl text-slate-950 font-bold hidden lg:flex  ">
          <li className="hover:text-purple-500"><Link href={"/"}>Home</Link></li>
          <li className="hover:text-purple-500"><Link href="/blogs" >Blogs</Link></li>
          <li className="hover:text-purple-500"> <Link href={"/about"}>About</Link> </li>
          <li className="hover:text-purple-500"><Link href={"/contact"}>Contact</Link></li>
          <li className="hover:text-purple-500">Help</li>
        </ul>
        <div className='flex gap-4 items-center'>
            <div className='flex shadow-inner rounded-full '>
                <img src="search.png" alt="" className=' w-8  md:w-12' />
                <input type="text" placeholder='Search' className='outline-none focus:ring-0 hidden xl:flex xl:flex ' />
            </div>
            <button className='font-bold'><Link href={"/login"}>Login</Link></button>
            <button className='bg-green-400 rounded-full font-bold h-10'><Link href={"/"}>Sign Up</Link></button>
           
        </div>
    </div>
  )
}

export default NavBar
