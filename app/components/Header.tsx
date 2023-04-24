// lib
import Link from 'next/link'
import Image from 'next/image'

// assets
import Logo from '../assets/logo.svg'

const Header = () => {
  return (
    <header className="flex space-x justify-between w-4/5 mt-5">
      <Link href="/">
        <Image src={Logo} alt="Logo"></Image>
      </Link>
      <button className="flex flex-col justify-evenly items-center w-[63px] h-[39px] rounded-xl bg-gradient-to-b from-[#D395FA]/50 to-[#7480F3]/50 ">
        <div className="w-3/5 h-1 bg-black rounded-sm"></div>
        <div className="w-3/5 h-1 bg-black rounded-sm"></div>
        <div className="w-3/5 h-1 bg-black rounded-sm"></div>
      </button>
    </header>
  )
}

export default Header
