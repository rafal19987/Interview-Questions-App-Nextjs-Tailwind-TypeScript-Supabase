// lib
import Image from 'next/image'
import Link from 'next/link'

// assets
import creatorAvatar from '../assets/creator.png'
import githubBigIcon from '../assets/githubBig.svg'
import linkedinIcon from '../assets/linkedin.svg'
import portfolioIcon from '../assets/portfolio.svg'
import emailIcon from '../assets/email.svg'

const page = () => {
  return (
    <>
      <section className="flex flex-col justify-center items-center">
        <div className="flex items-center justify-center w-[115px] h-[115px] p-1 rounded-full bg-gradient-to-b from-[#8ECAE6]/20 to-[#8ECAE6]/0 bg-opacity-25">
          <Image src={creatorAvatar} alt="avatar"></Image>
        </div>
        <h2 className="text-center mt-5">Hi I`m Rafał</h2>
        <p className="text-center mt-10">
          I`m ambitious frontend developer who are looking for opportunites to
          gain first expercience working in a real exited project
        </p>
      </section>
      <section className="mt-16 mb-16">
        <ul className="flex flex-col items-start">
          <li className="mt-4">
            <Link className="flex items-center" href="/">
              <Image src={githubBigIcon} alt="github icon"></Image>
              <span className="ml-2 text-sm">Check out my Github</span>
            </Link>
          </li>
          <li className="mt-4">
            <Link className="flex items-center" href="/">
              <Image src={linkedinIcon} alt="linkedin icon"></Image>
              <span className="ml-2 text-sm">Find me on LinkedIn</span>
            </Link>
          </li>
          <li className="mt-4">
            <Link className="flex items-center" href="/">
              <Image src={portfolioIcon} alt="portfolio icon"></Image>
              <span className="ml-2 text-sm">Visit my portfolio site</span>
            </Link>
          </li>
          <li className="mt-4">
            <Link className="flex items-center" href="/">
              <Image src={emailIcon} alt="email icon"></Image>
              <span className="ml-2 text-sm">Contact via Email</span>
            </Link>
          </li>
        </ul>
      </section>
    </>
  )
}

export default page
