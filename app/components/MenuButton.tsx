'use client'

// lib
import { useState } from 'react'

const MenuButton = () => {
  const [openMenu, setOpenMenu] = useState('hidden')
  const toggleMenu = () => {
    openMenu === 'hidden' ? setOpenMenu('') : setOpenMenu('hidden')
  }
  return (
    <button
      className="relative flex flex-col justify-evenly items-center w-[63px] h-[39px] rounded-xl bg-gradient-to-b from-[#D395FA]/50 to-[#7480F3]/50 md:hidden"
      onClick={() => toggleMenu()}
    >
      {openMenu ? (
        <>
          <div className="w-3/5 h-1 bg-[#023047] rounded-sm transition-transform duration-300"></div>
          <div className="w-3/5 h-1 bg-[#023047] rounded-sm transition-transform duration-300"></div>
        </>
      ) : (
        <>
          <div className="absolute top-4 rotate-45 w-3/5 h-1 bg-[#023047] rounded-sm transition-transform"></div>
          <div className="absolute bottom-4 rotate-50 w-3/5 h-1 bg-[#023047] rounded-sm transition-transform "></div>
        </>
      )}
    </button>
  )
}

export default MenuButton
