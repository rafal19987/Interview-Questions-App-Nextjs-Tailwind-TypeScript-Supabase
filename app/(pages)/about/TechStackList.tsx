import TechStackListItem from './TechStackListItem';
import tailwindIcon from 'assets/tailwind.svg';
import reactIcon from 'assets/react.svg';
import nextIcon from 'assets/next.svg';
import typescriptIcon from 'assets/typescript.svg';

interface IconsProps {
  icon: string;
  alt: string;
}

const icons: IconsProps[] = [
  {
    icon: tailwindIcon,
    alt: 'tailwind icon',
  },
  {
    icon: reactIcon,
    alt: 'react icon',
  },
  {
    icon: nextIcon,
    alt: 'next icon',
  },
  {
    icon: typescriptIcon,
    alt: 'typescript icon',
  },
];

const TechStackList = () => {
  return (
    <ul className="flex w-full flex-wrap justify-center items-center h-full p-4 md:w-3/5 md:justify-around">
      {icons.map((icon) => (
        <TechStackListItem key={icon.alt} icon={icon.icon} alt={icon.alt} />
      ))}
    </ul>
  );
};

export default TechStackList;
