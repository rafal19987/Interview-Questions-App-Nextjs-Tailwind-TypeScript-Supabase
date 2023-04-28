// components
import Logo from './Logo/Logo'
import HamburgerMenu from './HamburgerMenu/HamburgerMenu'

const Header = () => {
  return (
    <header className="flex justify-between items-center w-screen h-16 bg-[#6200ee] overflow-hidden">
      <Logo />
      <HamburgerMenu />
    </header>
  )
}

export default Header
