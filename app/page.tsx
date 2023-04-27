// lib
import Image from 'next/image'
import Link from 'next/link'

// assets
import arrow from './assets/arrow.svg'

export default function Home() {
  return (
    <>
      <h1 className="w-4/5 pt-10 text-2xl text-center ">
        Learn JavaScript Interview Questions
      </h1>
      <p className="w-4/5 mt-10 text-xl text-center ">
        For start your learning process please click button bellow{' '}
      </p>
      <Link href="/questions">
        <button className="flex justify-center items-center w-20 h-20 mt-16 rounded-full animate-bounce">
          <Image
            src={arrow}
            width={80}
            height={80}
            alt="go next page icon"
          ></Image>
        </button>
      </Link>
    </>
  )
}
