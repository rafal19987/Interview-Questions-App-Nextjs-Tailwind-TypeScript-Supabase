import Link from 'next/link'
import Button from './components/Button'

export default function Home(): JSX.Element {
  return (
    <>
      <div className="flex grow flex-col items-center">
        <h2 className="w-4/5 pt-6 text-2xl text-center font-semibold md:text-3xl">
          Learn JavaScript Interview Questions
        </h2>
        <p className="w-full p-6 lg:w-3/5 mt-6 text-lg text-center lg:text-lg">
          Job interviews can be very stressful. That is why it is so important
          to prepare well for them. This app was created to help you learn. The
          questions and answers you will see here may be useful in job
          interviews for Juniors and Mids. Repeating them successively may not
          guarantee success, but it will certainly make you feel a bit more
          confident before the key meeting with the technical person.
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
