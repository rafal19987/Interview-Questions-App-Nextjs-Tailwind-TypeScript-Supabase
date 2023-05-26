import tailwindIcon from 'assets/tailwind.svg';
import reactIcon from 'assets/react.svg';
import nextIcon from 'assets/next.svg';
import typescriptIcon from 'assets/typescript.svg';
import supabaseIcon from 'assets/supabase.svg';

type IconsProps = {
  icon: string;
  alt: string;
};

export const techStackIcons: IconsProps[] = [
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
  {
    icon: supabaseIcon,
    alt: 'supabase icon',
  },
];
