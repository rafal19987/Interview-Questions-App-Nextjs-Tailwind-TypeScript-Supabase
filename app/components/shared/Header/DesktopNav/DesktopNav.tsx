import Link from 'next/link'

interface RoutesProps {
  route: string
  description: string
}

const routes: RoutesProps[] = [
  {
    route: '/',
    description: 'home',
  },
  {
    route: '/about',
    description: 'about',
  },
  {
    route: '/creator',
    description: 'creator',
  },
]

const DesktopNav = () => {
  return (
    <div className="hidden md:flex justify-between w-3/5 h-full text-white text-xl">
      <ul className="flex w-full h-full justify-between items-center p-6">
        {routes.map((route) => (
          <li key={route.route}>
            <Link href={route.route}>{route.description.toUpperCase()}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DesktopNav
