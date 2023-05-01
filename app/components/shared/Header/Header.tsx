// components
// import Logo from './Logo/Logo'
import HamburgerMenu from './HamburgerMenu/HamburgerMenu'
import DesktopNav from './DesktopNav/DesktopNav'

const Header = () => {
  return (
    <header className="flex justify-between items-center w-full h-16 bg-[#6200ee] overflow-hidden">
      {/* <Logo /> */}
      <div className="opacity-0">JavaScript Interview Questions</div>
      <HamburgerMenu />
      <DesktopNav />
    </header>
  )
}

export default Header
