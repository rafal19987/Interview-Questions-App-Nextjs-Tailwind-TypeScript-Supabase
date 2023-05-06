import TechStackList from './TechStackList';
import LinkList from './LinkList';

const page = () => {
  return (
    <>
      <div className="flex grow flex-col items-center w-full h-full">
        <section className="flex flex-col items-center w-4/5">
          <h2 className="pt-6 text-lg text-center font-bold">
            Interview Questions App
          </h2>
          <p className="mt-6 text-sm text-left lg:w-3/5 lg:text-lg">
            Job interviews can be highly stressful, which is why it is crucial
            to adequately prepare for them. This application was developed to
            assist you in your learning process. The questions and answers
            provided here can be beneficial for junior and mid-level job
            interviews. Repeatedly reviewing them may not guarantee success, but
            it will undoubtedly boost your confidence prior to the crucial
            meeting with the technical interviewer.
          </p>
        </section>
        <section className="flex items-center flex-col w-4/5 mt-8">
          <LinkList />
        </section>
        <section className="flex flex-col w-4/5 mt-10">
          <h2 className="text-lg  text-center font-bold">Project Tech Stack</h2>
          <TechStackList />
        </section>
      </div>
    </>
  );
};

export default page;
