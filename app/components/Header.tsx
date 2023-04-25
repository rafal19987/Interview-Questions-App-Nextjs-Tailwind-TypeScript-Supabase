// lib
import Link from 'next/link'

// components
import Logo from './Logo'
import MenuButton from './MenuButton'

const Header = () => {
  return (
    <header className="relative flex space-x justify-between w-4/5 mt-5 pb-3">
      <Logo />
      <MenuButton />
      <div className="absolute bottom-0 h-1 w-full bg-gradient-to-r from-[#2D4BB6]/0 via-[#263BC0]/50 to-[#262B93]/0 rounded-xs" />
    </header>
  )
}

export default Header
