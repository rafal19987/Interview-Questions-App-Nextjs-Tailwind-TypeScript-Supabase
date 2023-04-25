// libs
import Link from 'next/link'
import Image from 'next/image'

// components
import TechStackList from './TechStackList'

// assets
import githubIcon from '../assets/github.svg'
import figmaIcon from '../assets/figma.svg'

const page = () => {
  return (
    <>
      <section>
        <h1 className="text-2xl text-center">Interview Questions App</h1>
        <p className="mt-6 text-m text-center">
          This application was created for people who are preparing for a job
          interview in the field of JavaScript. I wanted access to questions
          from any device, so the application is fully responsive.
        </p>
      </section>
      <section className="flex flex-col mt-10">
        <div>
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
        </div>
        <div className="flex flex-col w-auto mt-20">
          <h2 className="text-xl text-center">Project Tech Stack</h2>
          <TechStackList />
        </div>
      </section>
    </>
  )
}

export default page
