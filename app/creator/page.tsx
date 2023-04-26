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
      <div className="flex flex-col p-6 w-screen h-full">
        <section className="flex flex-col justify-center items-center ">
          <div className="flex items-center justify-center w-[115px] h-[115px] p-1 rounded-full bg-gradient-to-b from-[#8ECAE6]/20 to-[#8ECAE6]/0 bg-opacity-25">
            <Image
              src={creatorAvatar}
              width={100}
              height={100}
              alt="avatar"
            ></Image>
          </div>
          <h2 className="text-lg text-center mt-1">Hi I`m Rafał</h2>
          <p className="text-base text-center mt-2">
            I`m ambitious frontend developer who are looking for opportunites to
            gain first expercience working in a real exited project
          </p>
        </section>
        <section className="mt-6 w-full h-full">
          <ul className="flex flex-col items-center justify-between h-40 w-full">
            <li>
              <Link className="flex items-center" href="/">
                <Image
                  src={githubBigIcon}
                  width={20}
                  height={20}
                  alt="github icon"
                ></Image>
                <span className="ml-2 text-sm">Check out my Github</span>
              </Link>
            </li>
            <li>
              <Link className="flex items-center" href="/">
                <Image
                  src={linkedinIcon}
                  width={20}
                  height={20}
                  alt="linkedin icon"
                ></Image>
                <span className="ml-2 text-sm">Find me on LinkedIn</span>
              </Link>
            </li>
            <li>
              <Link className="flex items-center" href="/">
                <Image
                  src={portfolioIcon}
                  width={20}
                  height={20}
                  alt="portfolio icon"
                ></Image>
                <span className="ml-2 text-sm">Visit my portfolio site</span>
              </Link>
            </li>
            <li>
              <Link className="flex items-center" href="/">
                <Image
                  src={emailIcon}
                  width={20}
                  height={20}
                  alt="email icon"
                ></Image>
                <span className="ml-2 text-sm">Contact via Email</span>
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </>
  )
}

export default page
