// libs
import Link from 'next/link'
import Image from 'next/image'

// assets
import githubIcon from '../assets/github.svg'
import figmaIcon from '../assets/figma.svg'

const LinkList = () => {
  return (
    <ul>
      <li className="flex justify-center">
        <Link href="/" className="flex">
          <Image src={githubIcon} alt="github icon"></Image>
          <span className="pl-3">Repository of Project</span>
        </Link>
      </li>
      <li className="flex justify-center mt-4">
        <Link href="/" className="flex">
          <Image src={figmaIcon} alt="figma icon"></Image>
          <span className="pl-3">Prototype Figma Project</span>
        </Link>
      </li>
    </ul>
  )
}

export default LinkList
