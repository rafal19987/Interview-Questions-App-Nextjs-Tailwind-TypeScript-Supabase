import SocialList from './SocialList';

const page = () => {
  return (
    <>
      <div className='flex grow flex-col items-center w-full h-full'>
        <section className='flex flex-col justify-center items-center w-4/5'>
          <h2 className='pt-6 text-lg text-center font-bold md:pt-8 md:text-2xl xl:pt-14'>
            Hi I`m Rafał
          </h2>
          <p className='mt-8 text-sm text-left md:w-3/5 md:text-base lg:w-4/5 lg:mt-12'>
            Hi there! I am an{' '}
            <span className='text-[var(--green-primary)]'>
              aspiring Frontend Developer
            </span>{' '}
            looking for opportunities to grow and excel in the field. I am
            highly motivated, ambitious, and ready to take on{' '}
            <span className='text-[var(--green-primary)]'>new challenges.</span>{' '}
          </p>
          <p className='mt-3 text-sm text-left md:w-3/5 md:text-base lg:w-4/5'>
            Currently, I am{' '}
            <span className='text-[var(--green-primary)]'>
              expanding my knowledge
            </span>{' '}
            in TypeScript and Next.js, two powerful technologies in the frontend
            development ecosystem. Inspired by the potential of these tools, I
            have created this application to{' '}
            <span className='text-[var(--green-primary)]'>
              enhance my skills
            </span>{' '}
            and provide a platform for others to prepare for job interviews in
            JavaScript.
          </p>
          <p className='mt-3 text-sm text-left md:w-3/5 md:text-base lg:w-4/5'>
            If you have any questions or{' '}
            <span className='text-[var(--green-primary)]'>
              potential collaborations
            </span>
            , I would be thrilled to explore them. Thank you for your attention!{' '}
          </p>
        </section>
        <section className='flex items-center flex-col w-4/5 mt-8 md:w-3/5 md:mt-12'>
          <SocialList />
        </section>
      </div>
    </>
  );
};

export default page;
