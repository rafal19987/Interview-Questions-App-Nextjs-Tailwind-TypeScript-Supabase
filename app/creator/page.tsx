import CreatorAvatar from './CreatorAvatar'
import SocialList from './SocialList'

const page = () => {
  return (
    <>
      <div className="flex flex-col p-6 w-screen h-full bg-[#e9eaed] md:w-4/5 md:h-auto">
        <section className="flex flex-col justify-center items-center">
          <CreatorAvatar />
          <h2 className="text-lg text-center mt-1 md:mt-3 md:text-2xl">
            Hi I`m Rafał
          </h2>
          <p className="text-base text-center mt-2 md:mt-3 md:text-xl">
            I`m ambitious frontend developer who are looking for opportunites to
            gain first expercience working in a real exited project
          </p>
        </section>
        <section className="mt-6 w-full h-full md:mt-10">
          <SocialList />
        </section>
      </div>
    </>
  )
}

export default page
