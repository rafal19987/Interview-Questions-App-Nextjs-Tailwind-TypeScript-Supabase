import { SocialLinkTypes } from '@/types/socialLinkTypes';
import githubBigIcon from 'assets/githubBig.svg';
import linkedinIcon from 'assets/linkedin.svg';
import portfolioIcon from 'assets/portfolio.svg';
import emailIcon from 'assets/email.svg';

export const socialLinkIcons: SocialLinkTypes[] = [
  {
    icon: githubBigIcon,
    alt: 'github icon',
    description: 'Check my Github',
    reference: 'https://github.com/rafal19987',
    isEmail: false,
  },
  {
    icon: linkedinIcon,
    alt: 'linkedin icon',
    description: 'Invite me on linkedin',
    reference: 'https://www.linkedin.com/in/rafa%C5%82-izdebski-78023b1b0/',
    isEmail: false,
  },
  {
    icon: portfolioIcon,
    alt: 'portfolio site icon',
    description: 'Visit Portfolio Site',
    reference: 'https://www.rafalizdebski.pl/',
    isEmail: false,
  },
  {
    icon: emailIcon,
    alt: 'email icon',
    description: 'Contact via Email',
    reference: 'rafal987.1@o2.pl',
    isEmail: true,
  },
];
