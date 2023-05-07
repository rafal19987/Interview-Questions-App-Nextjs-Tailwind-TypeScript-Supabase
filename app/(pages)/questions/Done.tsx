import Link from 'next/link';
import Button from 'components/Button';

const Done = (): JSX.Element => {
  return (
    <section className="flex grow flex-col items-center text-center">
      <h2 className="mt-5 text-lg font-bold">Congratss!!</h2>
      <p className="mt-5 text-sm">
        You`ve gone through all questions I hope you will answer all of them
        during the interview
      </p>

      <Link className="mt-10" href="/">
        <Button text={'Go to start page'} />
      </Link>
    </section>
  );
};

export default Done;
