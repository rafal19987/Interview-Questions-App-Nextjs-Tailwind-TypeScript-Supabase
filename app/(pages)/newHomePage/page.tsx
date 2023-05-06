'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Toaster, toast } from 'react-hot-toast';
import Button from 'components/Button';
import addIcon from 'assets/addIcon.svg';

const popup = (): void => {
  toast.error('This future is not available yet. App is still progress..');
};

const Page = () => {
  return (
    <div className="relative flex grow flex-col items-center w-full md:w-[400px] ">
      {/* PopUp */}

      <Toaster />

      {/* Main */}
      <h2 className="w-4/5 pt-6 text-2xl text-center font-semibold md:text-3xl">
        Select pull of questions and start learning
      </h2>

      <section className="flex flex-col items-center w-4/5 h-full mt-10 lg:w-full">
        <div className="relative flex flex-col w-full h-full px-3 py-3 mt-6 border-2 border-[#FF7900] rounded-lg">
          <h3 className="text-xl font-bold">Default</h3>
          <h4 className="mt-4 font-bold">78 questions</h4>
          <input
            disabled
            checked
            className="absolute top-3 right-3 w-6 h-6 rounded-full border-2 border-[#299EC3]"
            type="checkbox"
            name="pull"
            id="default"
          />
        </div>
        <div className="relative flex flex-col w-full h-full p-3 mt-6 border-2 border-[#d1d1d1] rounded-lg">
          <h3 className="text-xl text-[#ADADAD] font-regular">Array methods</h3>
          <h4 className="mt-4 text-[#ADADAD] font-regular">24 questions</h4>
          <button
            className="absolute top-3 right-3 w-6 h-6 border-2 border-[#ADADAD]"
            onClick={popup}
          ></button>
        </div>
        <div className="flex flex-col items-center w-full h-28 p-3 mt-6  border-2 border-[#d1d1d1] rounded-lg">
          <h3 className="text-xl text-[#d1d1d1] font-regular">Create new</h3>
          <button
            className="flex items-center justify-center w-12 h-12 mt-4 border-2 border-[#ADADAD] rounded-lg"
            onClick={popup}
          >
            <Image src={addIcon} alt="add mark" />
          </button>
        </div>
      </section>
      <div className="mt-12">
        <Link href="/questions">
          <Button text={'start'}></Button>
        </Link>
      </div>
    </div>
  );
};

export default Page;
