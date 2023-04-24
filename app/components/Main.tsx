// lib
import Image from 'next/image'

// components
import Arrow from '../assets/arrow.svg'

const Main = () => {
  return (
    <main className="flex flex-col items-center h-4/5 w-4/5 mt-[36px] p-2">
      <h1 className="w-4/5 mt-[30px] text-2xl text-center text-[#B4B4B4]">
        Learn 100 JavaScript Interview Questions
      </h1>
      <p className="w-4/5 mt-[30px] text-xl text-center text-[#B4B4B4]">
        For start your learning process please click button bellow{' '}
      </p>
      <button className="flex justify-center items-center w-[75px] h-[75px] mt-5 bg-[#8ECAE6] rounded-full">
        <Image src={Arrow} alt="Arrow"></Image>
      </button>
    </main>
  )
}

export default Main
