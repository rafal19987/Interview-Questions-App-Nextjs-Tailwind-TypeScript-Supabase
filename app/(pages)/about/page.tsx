import TechStackList from './TechStackList';
import LinkList from './LinkList';

const page = () => {
  return (
    <>
      <div className="flex grow flex-col items-center w-full h-full">
        <section className="flex flex-col items-center w-4/5">
          <h2 className="pt-6 text-lg text-center font-bold md:pt-8 md:text-2xl xl:pt-14">
            Interview Questions App
          </h2>
          <p className="mt-8 text-sm text-left md:w-3/5 md:text-base lg:mt-12">
            Job interviews can be highly stressful, which is why it is crucial
            to adequately{' '}
            <span className="text-[var(--green-primary)]">
              prepare for them
            </span>
            . This application was developed to assist you in your{' '}
            <span className="text-[var(--green-primary)]">
              learning process.
            </span>
          </p>
          <p className="mt-3 text-sm text-left md:w-3/5 md:text-base">
            The questions and answers provided here can be beneficial for junior
            and mid-level job interviews. Repeatedly reviewing them may not
            guarantee success, but it will undoubtedly{' '}
            <span className="text-[var(--green-primary)]">
              boost your confidence{' '}
            </span>
            prior to the crucial meeting with the technical interviewer.
          </p>
        </section>
        <section className="flex items-center flex-col w-4/5 mt-10 md:mt-14">
          <LinkList />
        </section>
        <section className="flex flex-col w-full mt-10 md:mt-14 md:items-center">
          <h2 className="text-lg text-center font-bold md:text-xl">
            Project Tech Stack
          </h2>
          <TechStackList />
        </section>
      </div>
    </>
  );
};

export default page;
