// components
import Logo from './Logo/Logo'
import HamburgerMenu from './HamburgerMenu/HamburgerMenu'

const Header = () => {
  return (
    <header className="flex justify-between items-center w-screen h-24 bg-black overflow-hidden">
      <Logo />
      <HamburgerMenu />
    </header>
  )
}

export default Header
