import Link from 'next/link';
import Image from 'next/image';
import logo from 'assets/logo.svg';

const Logo = () => {
  return (
    <Link className="p-6" href="/">
      <Image src={logo} alt="Logo"></Image>
    </Link>
  );
};

export default Logo;
