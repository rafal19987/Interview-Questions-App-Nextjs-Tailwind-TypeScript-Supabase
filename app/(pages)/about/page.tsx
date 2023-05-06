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
            Job interviews can be very stressful. That is why it is so important
            to prepare well for them. This app was created to help you learn.
            The questions and answers you will see here may be useful in job
            interviews for Juniors and Mids. Repeating them successively may not
            guarantee success, but it will certainly make you feel a bit more
            confident before the key meeting with the technical person.
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
