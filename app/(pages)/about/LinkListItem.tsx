import Link from 'next/link';
import Image from 'next/image';

interface LinkProps {
  icon: string;
  alt: string;
  description: string;
  reference: string;
}

const LinkListItem = ({ icon, alt, description, reference }: LinkProps) => {
  return (
    <li>
      <Link
        href={reference}
        target="_blank"
        className="flex items-center pl-2 h-8 bg-[var(--link-primary-bg)] rounded-lg focus:border-[var(--link-focus-border)] focus:outline-none focus:border-2 hover:bg-[var(--link-hover-bg)]"
      >
        <Image src={icon} alt={alt} width={15} height={15}></Image>
        <span className="pl-3 text-sm">{description}</span>
      </Link>
    </li>
  );
};

export default LinkListItem;
