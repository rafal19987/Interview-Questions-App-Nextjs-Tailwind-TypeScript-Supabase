// components
import Logo from './Logo/Logo'
import HamburgerMenu from './HamburgerMenu/HamburgerMenu'
import DesktopNav from './DesktopNav/DesktopNav'

const Header = () => {
  return (
    <header className="flex justify-between items-center w-full h-16 bg-[#35373b] overflow-hidden">
      <Logo />
      <div className="hidden">
        {/* h1 is for SEO reason. On all pages I got only one h1 which is hidden for user */}
        <h1>JavaScript Interview Questions</h1>
      </div>
      <HamburgerMenu />
    </header>
  )
}

export default Header
