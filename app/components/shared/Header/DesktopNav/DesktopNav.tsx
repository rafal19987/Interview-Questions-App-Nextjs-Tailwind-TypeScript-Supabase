import Link from 'next/link';

interface RoutesProps {
  route: string;
  description: string;
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
];

const DesktopNav = (): JSX.Element => {
  return (
    <div className="hidden md:flex justify-between w-3/5 h-full text-[#ACA4B2] text-sm lg:text-lg">
      <ul className="flex w-full h-full justify-between items-center p-6">
        {routes.map((route) => (
          <li key={route.route}>
            <Link className="hover:text-[#8b8b8b]" href={route.route}>
              {route.description.toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DesktopNav;
