'use client';
import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

const Header = () => {
  const [showNav, setShowNav] = useState(false)
  const pathname = usePathname()


  const navArr = [
    {
      id: 1,
      route: '/',
      name: "Home"
    },
    {
      id: 2,
      route: '/services',
      name: "Services"
    },
    {
      id: 3,
      route: '/about-us',
      name: "About Us"
    },
    {
      id: 4,
      route: '/contact-us',
      name: "Contact Us"
    }
  ]
  return <>



    <header className="bg-black text-white py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">

        <h1 className="text-2xl font-bold">
          <Link href={"/"}>
          <span className="text-teal-400">NEO</span> Digital
          </Link>
        </h1>


        <nav className="hidden md:flex space-x-8">
        
        {navArr?.map((nav) => (
          <Link key={nav?.id} href={nav?.route} className={`hover:text-teal-400 font-semibold relative ${pathname === nav?.route ? 'text-teal-400  after:block after:h-0.5 after:bg-teal-400 after:w-full after:scale-x-100 ': ""}`}>
            {nav?.name}
          </Link>
        ))}
        </nav>


        <button className="md:hidden text-white focus:outline-none" onClick={() => setShowNav(!showNav)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
    {showNav ? <nav className=''>


      <div className="absolute w-[300px] right-[10px] bg-gray-700 text-white space-y-4 px-4 py-4 transition-all duration-300">
      {navArr?.map((nav) => (
          <Link key={nav?.id} href={nav?.route} className={`block hover:text-teal-400 font-semibold relative border-b-1 border-[#9d9c9c] pb-3 ${pathname === nav?.route ? 'text-teal-400 ': ""}`}>
            {nav?.name}
          </Link>
        ))}

        </div>


    </nav> : ""}










  </>
}

export default Header;