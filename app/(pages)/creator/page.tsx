import SocialList from './SocialList';

const page = (): JSX.Element => {
  return (
    <>
      <div className="flex grow flex-col items-center p-6 w-screen h-full bg-white ">
        <section className="flex flex-col justify-center items-center  md:w-4/5">
          <h2 className="text-3xl text-center font-bold mt-1 md:mt-3 ">
            Hi I`m Rafał
          </h2>
          <p className="text-lg text-left mt-4 md:mt-3 md:text-2xl lg:max-w-screen-sm">
            I am an ambitious frontend developer who is actively seeking
            opportunities to gain valuable experience by working on exciting
            real-world projects.
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
