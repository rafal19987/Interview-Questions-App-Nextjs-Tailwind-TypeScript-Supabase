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

const DesktopNav = () => {
  return (
    <div className="hidden md:flex justify-between w-3/5 h-full text-[#ACA4B2] text-sm lg:text-lg">
      <ul className="flex w-full h-full justify-around items-center">
        {routes.map((route) => (
          <li
            key={route.route}
            className="flex items-center justify-center w-28 bg-[#232323] rounded-lg"
          >
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
