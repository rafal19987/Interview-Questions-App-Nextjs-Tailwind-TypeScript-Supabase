import Link from 'next/link'

const DesktopNav = () => {
  return (
    <div className="hidden md:flex justify-between w-3/5 h-full text-white text-xl">
      <ul className="flex w-full h-full justify-between items-center p-6">
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
