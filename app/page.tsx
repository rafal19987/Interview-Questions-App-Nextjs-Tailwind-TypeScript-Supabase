// lib
import Link from 'next/link'

// components
import Button from './components/Button'

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
        <Button text={'start'} />
      </Link>
    </>
  )
}
