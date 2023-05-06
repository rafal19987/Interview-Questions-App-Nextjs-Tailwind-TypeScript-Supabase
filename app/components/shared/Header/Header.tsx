import Logo from './Logo/Logo';
import HamburgerMenu from './HamburgerMenu/HamburgerMenu';

const Header = (): JSX.Element => {
  return (
    <header className="flex justify-between items-center w-full h-16 overflow-hidden">
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
