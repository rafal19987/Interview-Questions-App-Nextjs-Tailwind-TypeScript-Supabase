// lib
import Link from 'next/link'
import Image from 'next/image'

// assets
import logo from '../../../../assets/logo.svg'
import logoNew from '../../../../assets/logoNew.svg'

const Logo = () => {
  return (
    <Link className="p-6" href="/">
      <Image src={logoNew} alt="Logo"></Image>
    </Link>
  )
}

export default Logo
