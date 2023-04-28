// lib
import Link from 'next/link'

// component
import Button from '../components/Button'

const Done = () => {
  return (
    <>
      <h2>Congratss!!</h2>
      <p>You`ve gone through all questions</p>
      <p>I hope you will answer all of them during the interview</p>

      <Link href="/">
        <Button text={'Go to start page'} />
      </Link>
    </>
  )
}

export default Done
