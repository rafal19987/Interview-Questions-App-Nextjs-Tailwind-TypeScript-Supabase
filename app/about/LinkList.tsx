// libs
import Link from 'next/link'
import Image from 'next/image'

// assets
import githubIcon from '../assets/github.svg'
import figmaIcon from '../assets/figma.svg'

const LinkList = () => {
  return (
    <ul className="flex flex-col justify-between w-64 h-20">
      <li>
        <Link
          href="https://github.com/rafal19987/Interview-Questions-App"
          target="_blank"
          className="flex items-center pl-2 h-8 bg-[#e9eaed] rounded-lg focus:border-[#ff7900] focus:outline-none focus:border-2 hover:bg-slate-300 active:bg-slate-200"
        >
          <Image src={githubIcon} alt="github icon"></Image>
          <span className="pl-3">Repository of Project</span>
        </Link>
      </li>
      <li>
        <Link
          href="https://www.figma.com/proto/8QvtrBsjZqSzMUszJSo9qD/Interview-Questions?node-id=1-3&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A3"
          target="_blank"
          className="flex items-center pl-2 h-8 bg-[#e9eaed] rounded-lg focus:border-[#ff7900] focus:outline-none focus:border-2 hover:bg-slate-300 active:bg-slate-200"
        >
          <Image src={figmaIcon} alt="figma icon"></Image>
          <span className="pl-3">Prototype Figma Project</span>
        </Link>
      </li>
    </ul>
  )
}

export default LinkList
