import Link from 'next/link'
import Image from 'next/image'

interface LinkProps {
  icon: string
  alt: string
  description: string
  reference: string
}

const LinkListItem = ({ icon, alt, description, reference }: LinkProps) => {
  return (
    <li>
      <Link
        href={reference}
        target="_blank"
        className="flex items-center pl-2 h-8 bg-[#e9eaed] rounded-lg focus:border-[#ff7900] focus:outline-none focus:border-2 hover:bg-slate-300 active:bg-slate-200"
      >
        <Image src={icon} alt={alt} width={15} height={15}></Image>
        <span className="pl-3">{description}</span>
      </Link>
    </li>
  )
}

export default LinkListItem
