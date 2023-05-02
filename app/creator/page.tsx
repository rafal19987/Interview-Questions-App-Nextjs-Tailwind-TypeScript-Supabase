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
      <div className="flex flex-col p-6 w-screen h-full bg-[#e9eaed] md:w-4/5 md:h-auto">
        <section className="flex flex-col justify-center items-center">
          <div className="flex items-center justify-center w-[120px] h-[120px] p-1 rounded-full bg-[#8FF7900]">
            <Image
              src={creatorAvatar}
              width={80}
              height={80}
              alt="avatar"
            ></Image>
          </div>
          <h2 className="text-lg text-center mt-1 md:mt-3 md:text-2xl">
            Hi I`m Rafał
          </h2>
          <p className="text-base text-center mt-2 md:mt-3 md:text-xl">
            I`m ambitious frontend developer who are looking for opportunites to
            gain first expercience working in a real exited project
          </p>
        </section>
        <section className="mt-6 w-full h-full md:mt-10">
          <ul className="flex flex-col items-center justify-between h-40 w-full md:flex-row md:items-stretch">
            <li className="md:h-max md:w-28 md:flex md:items-center md:justify-center md:bg-white md:rounded-lg md:hover:bg-slate-300 md:active:bg-slate-200 transition-colors duration-300">
              <Link
                className="flex items-center md:flex-col md:justify-center md:w-full md:h-28"
                href="/"
              >
                <Image
                  src={githubBigIcon}
                  width={30}
                  height={30}
                  alt="github icon"
                ></Image>
                <span className="ml-2 text-sm md:mt-1 md:w-full md:ml-0 md:text-center">
                  Check out my Github
                </span>
              </Link>
            </li>
            <li className="md:h-max md:w-28 md:flex md:items-center md:justify-center md:bg-white md:rounded-lg md:hover:bg-slate-300 md:active:bg-slate-200 transition-colors duration-300">
              <Link
                className="flex items-center md:flex-col md:justify-center md:w-full md:h-28"
                href="/"
              >
                <Image
                  src={linkedinIcon}
                  width={30}
                  height={30}
                  alt="linkedin icon"
                ></Image>
                <span className="ml-2 text-sm md:mt-1 md:w-full md:ml-0 md:text-center">
                  Find me on LinkedIn
                </span>
              </Link>
            </li>
            <li className="md:h-max md:w-28 md:flex md:items-center md:justify-center md:bg-white md:rounded-lg md:hover:bg-slate-300 md:active:bg-slate-200 transition-colors duration-300">
              <Link
                className="flex items-center md:flex-col md:justify-center md:w-full md:h-28"
                href="/"
              >
                <Image
                  src={portfolioIcon}
                  width={30}
                  height={30}
                  alt="portfolio icon"
                ></Image>
                <span className="ml-2 text-sm md:mt-1 md:w-full md:ml-0 md:text-center">
                  Visit my portfolio site
                </span>
              </Link>
            </li>
            <li className="md:h-max md:w-28 md:flex md:items-center md:justify-center md:bg-white md:rounded-lg md:hover:bg-slate-300 md:active:bg-slate-200 transition-colors duration-300">
              <Link
                className="flex items-center md:flex-col md:justify-center md:w-full md:h-28"
                href="/"
              >
                <Image
                  src={emailIcon}
                  width={30}
                  height={30}
                  alt="email icon"
                ></Image>
                <span className="ml-2 text-sm md:mt-1 md:w-full md:ml-0 md:text-center">
                  Contact via Email
                </span>
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </>
  )
}

export default page
