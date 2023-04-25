// lib
import Link from 'next/link'
import Image from 'next/image'

// assets
import logo from '../assets/logo.svg'

const Logo = () => {
  return (
    <Link href="/">
      <Image src={logo} alt="Logo"></Image>
    </Link>
  )
}

export default Logo
