'use client';
import Image from 'next/image';
import { Toaster, toast } from 'react-hot-toast';

interface NotReadyPortfolioLinkProps {
  icon: string;
  alt: string;
  description: string;
}

const popup = (): void => {
  toast.error(
    'This feature is not available yet. The application is still being developed.'
  );
};

const NotReadyPortfolioLink = ({
  icon,
  alt,
  description,
}: NotReadyPortfolioLinkProps) => {
  return (
    <li className="box-border w-56 rounded-lg md:h-max md:w-28 flex items-center md:justify-center h-12">
      <Toaster />
      <button
        className=" cursor-not-allowed flex items-center w-full h-12 px-2 rounded-lg bg-[var(--link-primary-bg)] focus:outline-none  hover:bg-[var(--link-hover-bg)] md:flex-col md:justify-center md:w-full md:h-28"
        onClick={popup}
      >
        <Image src={icon} width={30} height={30} alt={alt} />
        <span className="ml-2 text-sm md:mt-1 md:w-full md:ml-0 md:text-center">
          {description}
        </span>
      </button>
    </li>
  );
};

export default NotReadyPortfolioLink;
