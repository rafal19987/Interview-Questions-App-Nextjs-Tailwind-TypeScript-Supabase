import Logo from './Logo/Logo';
import HamburgerMenu from './HamburgerMenu/HamburgerMenu';

const Header = () => {
  return (
    <header className="flex justify-between items-center w-full h-16 overflow-hidden border-b border-[#232323] lg:border lg:border-t-0">
      <Logo />
      <div className="hidden">
        {/* h1 is for SEO reason. On all pages I got only one h1 which is hidden for user */}
        <h1>JavaScript Interview Questions</h1>
      </div>
      <HamburgerMenu />
    </header>
  );
};

export default Header;
