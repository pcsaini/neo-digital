'use client';
import Link from 'next/link'
import {useState} from 'react'

const Header = () => {
  const [showNav, setShowNav] = useState(false)


    return <>



    <header className="bg-black text-white py-4 px-6">
      <div className="mx-auto flex justify-between items-center">

        <h1 className="text-2xl font-bold">
          <span className="text-teal-400">NEO</span> Digital
        </h1>

      
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-teal-400 font-semibold relative after:block after:h-0.5 after:bg-teal-400 after:w-full after:scale-x-100">
            Home
          </a>
          <a href="#" className="text-gray-300 hover:text-teal-400 transition">About Us</a>
          <a href="#" className="text-gray-300 hover:text-teal-400 transition">Our Services</a>
          <a href="#" className="text-gray-300 hover:text-teal-400 transition">Contact Us</a>
        </nav>

        
        <button className="md:hidden text-white focus:outline-none" onClick={() => setShowNav(!showNav)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>

{showNav ?<nav className=''>
 Test
</nav> : ""}


    







    </>
}

export default Header;