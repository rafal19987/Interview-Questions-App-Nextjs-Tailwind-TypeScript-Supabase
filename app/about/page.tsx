// libs
import Link from 'next/link'
import Image from 'next/image'

// assets
import githubIcon from '../assets/github.svg'
import figmaIcon from '../assets/figma.svg'
import tailwindIcon from '../assets/tailwind.svg'
import reactIcon from '../assets/react.svg'
import nextIcon from '../assets/next.svg'
import typescriptIcon from '../assets/tailwind.svg'

const page = () => {
  return (
    <>
      <section>
        <h1 className="text-3xl text-center">Interview Questions App</h1>
        <p className="mt-6 text-xl text-center">
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
          <h2 className="text-2xl text-center">Project Tech Stack</h2>
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
        </div>
      </section>
    </>
  )
}

export default page
