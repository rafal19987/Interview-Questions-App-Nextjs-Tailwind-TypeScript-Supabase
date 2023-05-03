import CreatorAvatar from './CreatorAvatar'
import SocialList from './SocialList'

const page = (): JSX.Element => {
  return (
    <>
      <div className="flex grow flex-col items-center p-6 w-screen h-full bg-white ">
        <section className="flex flex-col justify-center items-center  md:w-4/5">
          <CreatorAvatar />
          <h2 className="text-lg text-center mt-1 md:mt-3 md:text-2xl">
            Hi I`m Rafał
          </h2>
          <p className="text-lg text-center mt-2 md:mt-3 md:text-2xl lg:max-w-screen-sm">
            I`m ambitious frontend developer who are looking for opportunites to
            gain first expercience working in a real exited project
          </p>
        </section>
        <section className="flex items-center flex-col w-4/5 mt-8">
          <SocialList />
        </section>
      </div>
    </>
  )
}

export default page
