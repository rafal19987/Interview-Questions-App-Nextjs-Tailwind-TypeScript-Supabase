import Image from 'next/image'

const TechStackListItem = ({ icon, alt }: { icon: string; alt: string }) => {
  return (
    <li className="px-2 mt-2">
      <Image src={icon} alt={alt}></Image>
    </li>
  )
}

export default TechStackListItem
