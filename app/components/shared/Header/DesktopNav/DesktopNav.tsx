import Link from 'next/link'

const DesktopNav = () => {
  return (
    <div className="sm:hidden md:flex justify-evenly w-full h-full  text-white text-xl">
      <ul className="flex w-full h-full justify-evenly items-center">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/about">
          <li>About</li>
        </Link>
        <Link href="creator">
          <li>Creator</li>
        </Link>
      </ul>
    </div>
  )
}

export default DesktopNav
