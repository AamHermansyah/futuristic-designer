'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react'
import { LuMenu } from 'react-icons/lu';
import { MdOutlineClose } from 'react-icons/md';

function Navbar() {
  const [navbarActive, setNavbarActive] = useState(false);
  const navbarRef = useRef<HTMLDivElement|null>(null)

  useEffect(() => {
    const navbar = navbarRef.current
    if (navbar) {
      const handleEventNavbar = () => {
        navbar.classList.toggle('navbar-active', window.scrollY > 0)
      }

      window.addEventListener('scroll', handleEventNavbar)

      return () => {
        window.removeEventListener('scroll', handleEventNavbar)
      }
    }
  }, []);

  return (
    <>
      <header ref={navbarRef} className="fixed w-full bg-opacity-20 z-10 transition">
        <div className="container flex items-center justify-between py-4">
          <div>
            <h1 className="text-2xl uppercase font-extrabold text-gradient-1">
              F.D
            </h1>
          </div>
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            <Link href="" className="nav-item">Home</Link>
            <Link href="" className="nav-item">About Us</Link>
            <Link href="" className="nav-item">Services</Link>
            <Link href="" className="nav-item">Works</Link>
            <Link href="" className="py-2 px-4 btn-gradient-2 rounded-full transition">Contact Me</Link>
          </nav>
          <button
            onClick={() => setNavbarActive(true)}
            className="block md:hidden"
          >
            <LuMenu fontSize={30} />
          </button>
        </div>
      </header>
      {navbarActive && (
        <div className="block md:hidden">
          <nav
            className="fixed inset-0 left-0 flex flex-col items-end justify-center gap-4 bg-black bg-opacity-30 backdrop-blur-sm z-50 px-10"
            style={{ boxShadow: 'inset 0 0 2000px rgba(0, 0, 0)' }}
          >
            <Link href="" className="nav-item">Home</Link>
            <Link href="" className="nav-item">About Us</Link>
            <Link href="" className="nav-item">Services</Link>
            <Link href="" className="nav-item">Works</Link>
            <Link href="" className="py-2 px-4 btn-gradient-2 rounded-full transition">Contact Me</Link>
          </nav>
          <button
            onClick={() => setNavbarActive(false)}
            className="fixed right-8 top-4 md:hidden z-[999]"
          >
            <MdOutlineClose fontSize={30} />
          </button>
        </div>
      )}
    </>
  )
}

export default Navbar