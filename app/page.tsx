// lib
import Image from 'next/image'

// components
import Arrow from './assets/arrow.svg'

export default function Home() {
  return (
    <>
      <h1 className="w-4/5 pt-10 text-2xl text-center text-[#B4B4B4]">
        Learn JavaScript Interview Questions
      </h1>
      <p className="w-4/5 mt-10 text-xl text-center text-[#B4B4B4]">
        For start your learning process please click button bellow{' '}
      </p>
      <button className="flex justify-center items-center w-[75px] h-[75px] mt-16 bg-[#8ECAE6]/50 rounded-full animate-bounce">
        <Image src={Arrow} alt="Arrow"></Image>
      </button>
    </>
  )
}
