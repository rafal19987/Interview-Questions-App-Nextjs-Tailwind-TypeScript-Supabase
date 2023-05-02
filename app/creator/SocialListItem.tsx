import Link from 'next/link'
import Image from 'next/image'

interface SocialsProps {
  icon: string
  alt: string
  description: string
  reference: string
  isEmail?: Boolean
}

const SocialListItem = ({
  icon,
  alt,
  description,
  reference,
  isEmail,
}: SocialsProps) => {
  return (
    <li className="bg-[#e9eaed] md:h-max md:w-28 md:flex md:items-center md:justify-center md:rounded-lg md:hover:bg-slate-300 md:active:bg-slate-200 transition-colors duration-300">
      <Link
        className="flex items-center md:flex-col md:justify-center md:w-full md:h-28"
        target="_blank"
        href={isEmail ? `mailto:${reference}` : `${reference}`}
      >
        <Image src={icon} width={30} height={30} alt={alt} />
        <span className="ml-2 text-sm md:mt-1 md:w-full md:ml-0 md:text-center">
          {description}
        </span>
      </Link>
    </li>
  )
}

export default SocialListItem
