// lib
import Link from 'next/link'

// components
import Button from './components/Button'

export default function Home() {
  return (
    <>
      <div className="flex grow flex-col items-center">
        <h2 className="w-4/5 pt-6 text-2xl text-center md:text-3xl">
          Learn JavaScript Interview Questions
        </h2>
        <p className="w-4/5 mt-6 text-lg text-center lg:w-3/5 lg:text-lg">
          For start your learning process please click button bellow{' '}
        </p>
        <div className="mt-10">
          <Link href="/questions">
            <Button text={'start'} />
          </Link>
        </div>
      </div>
    </>
  )
}
