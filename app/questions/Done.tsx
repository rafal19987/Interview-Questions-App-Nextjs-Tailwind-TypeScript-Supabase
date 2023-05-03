// lib
import Link from 'next/link'

// component
import Button from '../components/Button'

const Done = () => {
  return (
    <section className="flex grow flex-col items-center">
      <h2 className="mt-5 text-2xl">Congratss!!</h2>
      <p className="mt-5 text-xl">You`ve gone through all questions</p>
      <p className="mt-2">
        I hope you will answer all of them during the interview
      </p>

      <Link className="mt-10" href="/">
        <Button text={'Go to start page'} />
      </Link>
    </section>
  )
}

export default Done
