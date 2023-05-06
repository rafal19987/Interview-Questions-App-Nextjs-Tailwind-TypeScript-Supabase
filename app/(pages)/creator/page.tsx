import SocialList from './SocialList';

const page = (): JSX.Element => {
  return (
    <>
      <div className="flex grow flex-col items-center w-full h-full">
        <section className="flex flex-col justify-center items-center w-4/5">
          <h2 className="pt-6 text-lg text-center font-bold">Hi I`m Rafał</h2>
          <p className="text-sm text-left mt-6 md:mt-3 lg:max-w-screen-sm">
            I am an ambitious frontend developer actively seeking opportunities
            to gain valuable experience working on real projects.
          </p>
        </section>
        <section className="flex items-center flex-col w-4/5 mt-8">
          <SocialList />
        </section>
      </div>
    </>
  );
};

export default page;
