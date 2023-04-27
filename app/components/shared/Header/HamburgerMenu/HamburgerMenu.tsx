'use client'

// lib
import { useState } from 'react'
import Link from 'next/link'

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggleMenu = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true)
  }

  return (
    <>
      <button
        className="relative flex flex-col justify-evenly items-center w-16 h-12 mr-6 rounded-lg bg-[#4F4E8D] md:hidden"
        onClick={toggleMenu}
      >
        {isOpen ? (
          <>
            <div className="translate-y-2 rotate-45 w-4/5 h-1 bg-white rounded-sm transition-all duration-300"></div>
            <div className="-translate-y-2 -rotate-45 w-4/5 h-1 bg-white rounded-sm transition-all duration-300"></div>
          </>
        ) : (
          <>
            <div className="w-4/5 h-1 bg-white rounded-sm transition-transform duration-300"></div>
            <div className="w-4/5 h-1 bg-white rounded-sm transition-transform duration-300"></div>
          </>
        )}
      </button>
      {isOpen ? (
        // nav height is [100vh - (headerHeight)]
        <nav className="absolute flex justify-center items-center top-24 right-0 w-screen h-[calc(100vh-6rem)] bg-slate-100 text-3xl z-10 duration-300">
          <ul className="flex flex-col justify-evenly items-center border-2 w-full h-full">
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
        // nav height is [100vh - (headerHeight)]
        <nav className="absolute flex justify-center items-center top-24 right-0 w-screen h-[calc(100vh-6rem)] bg-slate-100 text-3xl z-10 translate-x-full duration-300 ">
          <ul className="flex flex-col justify-evenly items-center border-2 w-full h-full">
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
    </>
  )
}

export default HamburgerMenu
