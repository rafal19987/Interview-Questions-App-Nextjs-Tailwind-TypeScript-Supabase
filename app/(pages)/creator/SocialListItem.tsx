'use client';

import Link from 'next/link';
import Image from 'next/image';
import NotReadyPortfolioLink from './NotReadyPortfolioLink';

interface SocialsProps {
  icon: string;
  alt: string;
  description: string;
  reference: string;
  isEmail?: Boolean;
}

const SocialListItem = ({
  icon,
  alt,
  description,
  reference,
  isEmail,
}: SocialsProps): JSX.Element => {
  if (alt === 'portfolio site icon')
    return (
      <NotReadyPortfolioLink icon={icon} description={description} alt={alt} />
    );

  return (
    <li className="box-border w-56 rounded-lg md:h-max md:w-28 flex items-center md:justify-center h-12">
      <Link
        className="flex items-center w-full h-12 px-2 rounded-lg bg-[var(--link-primary-bg)]  focus:border-[var(--link-focus-border)] focus:outline-none focus:border-2 hover:bg-[var(--link-hover-bg)] md:flex-col md:justify-center md:w-full md:h-28"
        target="_blank"
        href={isEmail ? `mailto:${reference}` : `${reference}`}
      >
        <Image src={icon} width={30} height={30} alt={alt} />
        <span className="ml-2 text-sm md:mt-1 md:w-full md:ml-0 md:text-center">
          {description}
        </span>
      </Link>
    </li>
  );
};

export default SocialListItem;
