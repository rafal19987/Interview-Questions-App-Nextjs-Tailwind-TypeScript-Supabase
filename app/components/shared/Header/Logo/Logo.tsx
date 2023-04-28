// lib
import Link from 'next/link'
import Image from 'next/image'

// assets
import logo from '../../../../assets/logo.svg'
import logoNew from '../../../../assets/logoNew.svg'
import logo3 from '../../../../assets/logo3.svg'

const Logo = () => {
  return (
    <Link className="p-6" href="/">
      <Image src={logo3} alt="Logo"></Image>
    </Link>
  )
}

export default Logo
