import Image from 'next/image'

// assets
import tailwindIcon from '../assets/tailwind.svg'
import reactIcon from '../assets/react.svg'
import nextIcon from '../assets/next.svg'
import typescriptIcon from '../assets/tailwind.svg'

const TechStackList = () => {
  return (
    <ul className="flex w-full h-full py-6">
      <li className="px-2">
        <Image src={tailwindIcon} alt="tailwind icon"></Image>
      </li>
      <li className="px-2">
        <Image src={reactIcon} alt="react icon"></Image>
      </li>
      <li className="px-2">
        <Image src={nextIcon} alt="next icon"></Image>
      </li>
      <li className="px-2">
        <Image src={typescriptIcon} alt="typescript icon"></Image>
      </li>
    </ul>
  )
}

export default TechStackList
