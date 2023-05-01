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
        <Link
          href="https://github.com/rafal19987/Interview-Questions-App"
          className="flex"
        >
          <Image src={githubIcon} alt="github icon"></Image>
          <span className="pl-3">Repository of Project</span>
        </Link>
      </li>
      <li className="flex justify-center mt-4">
        <Link
          href="https://www.figma.com/proto/8QvtrBsjZqSzMUszJSo9qD/Interview-Questions?node-id=1-3&starting-point-node-id=1%3A3"
          className="flex"
        >
          <Image src={figmaIcon} alt="figma icon"></Image>
          <span className="pl-3">Prototype Figma Project</span>
        </Link>
      </li>
    </ul>
  )
}

export default LinkList
