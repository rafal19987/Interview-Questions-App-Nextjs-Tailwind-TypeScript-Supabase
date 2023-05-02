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
    <li className="box-border w-56 bg-[#e9eaed] rounded-lg md:h-max md:w-28 flex items-center md:justify-center h-12 hover:bg-slate-300 active:bg-slate-200 transition-colors duration-100]">
      <Link
        className="flex items-center w-full h-12 px-2 rounded-lg focus:border-[#ff7900] focus:outline-none focus:border-2 md:flex-col md:justify-center md:w-full md:h-28"
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
