import githubIcon from 'assets/github.svg';
import figmaIcon from 'assets/figma.svg';
import LinkListItem from './LinkListItem';

interface LinkProps {
  icon: string;
  alt: string;
  description: string;
  reference: string;
}

const links: LinkProps[] = [
  {
    icon: githubIcon,
    alt: 'github icon',
    description: 'Repository of Project',
    reference: 'https://github.com/rafal19987/Interview-Questions-App',
  },
  {
    icon: figmaIcon,
    alt: 'linkedin icon',
    description: 'Prototype Figma Project',
    reference:
      'https://www.figma.com/proto/8QvtrBsjZqSzMUszJSo9qD/Interview-Questions?node-id=1-3&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A3',
  },
];

const LinkList = (): JSX.Element => {
  return (
    <ul className="flex flex-col justify-between w-64 h-20 xl:mt-4">
      {links.map((link) => (
        <LinkListItem
          key={link.alt}
          icon={link.icon}
          alt={link.alt}
          description={link.description}
          reference={link.reference}
        />
      ))}
    </ul>
  );
};

export default LinkList;
