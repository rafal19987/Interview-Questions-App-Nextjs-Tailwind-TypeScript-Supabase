'use client'

// lib
import { useState } from 'react'
import Link from 'next/link'

import DesktopNav from '../DesktopNav/DesktopNav'

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggleMenu = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true)
  }

  return (
    <>
      <button
        className="relative flex flex-col justify-evenly items-center w-16 h-8 mr-6  md:hidden"
        onClick={toggleMenu}
      >
        {isOpen ? (
          // menu is open
          <>
            <div className="translate-y-2 rotate-45 w-3/5 h-1 bg-white rounded-sm transition-all duration-300"></div>
            <div className="w-3/5 h-1 bg-white rounded-sm transition-all opacity-0 duration-100"></div>
            <div className="-translate-y-2 -rotate-45 w-3/5 h-1 bg-white rounded-sm transition-all duration-300"></div>
          </>
        ) : (
          // menu is closed
          <>
            <div className="w-3/5 h-1 bg-white rounded-sm transition-transform duration-300"></div>
            <div className="w-3/5 h-1 bg-white rounded-sm transition-all opacity-1 duration-100"></div>
            <div className="w-3/5 h-1 bg-white rounded-sm transition-transform duration-300"></div>
          </>
        )}
      </button>
      {isOpen ? (
        // nav is open
        // nav height is [100vh - (headerHeight)]
        <nav className="absolute flex justify-center  top-16 right-auto w-screen h-[calc(100vh-4rem)] bg-[#6200ee] text-3xl text-white z-10 duration-300">
          <ul className="flex flex-col justify-evenly items-center  w-full h-full">
            <li className="">
              <Link href="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li className="">
              <Link href="/about" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li className="">
              <Link href="/creator" onClick={toggleMenu}>
                Creator
              </Link>
            </li>
          </ul>
        </nav>
      ) : (
        // nav is closed
        // nav height is [100vh - (headerHeight)]
        <nav className="absolute flex justify-center  top-16 right-0 w-screen h-[calc(100vh-4rem)] bg-[#6200ee] text-3xl text-white z-10 translate-x-full duration-300 ">
          <ul className="flex flex-col justify-evenly items-center  w-full h-full">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/creator">Creator</Link>
            </li>
          </ul>
        </nav>
      )}
      <DesktopNav />
    </>
  )
}

export default HamburgerMenu
