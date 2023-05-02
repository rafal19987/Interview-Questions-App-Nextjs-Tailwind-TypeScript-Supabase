import CreatorAvatar from './CreatorAvatar'
import SocialList from './SocialList'

const page = () => {
  return (
    <>
      <div className="flex grow flex-col items-center p-6 w-screen h-full bg-white ">
        <section className="flex flex-col justify-center items-center  md:w-4/5">
          <CreatorAvatar />
          <h2 className="text-lg text-center mt-1 md:mt-3 md:text-2xl">
            Hi I`m Rafał
          </h2>
          <p className="text-base text-center mt-2 md:mt-3 md:text-xl">
            I`m ambitious frontend developer who are looking for opportunites to
            gain first expercience working in a real exited project
          </p>
        </section>
        <section className="mt-6 w-full h-full md:mt-10 md:w-4/5">
          <SocialList />
        </section>
      </div>
    </>
  )
}

export default page
