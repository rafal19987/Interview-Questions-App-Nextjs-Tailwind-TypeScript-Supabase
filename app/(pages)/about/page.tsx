import TechStackList from './TechStackList'
import LinkList from './LinkList'

const page = () => {
  return (
    <>
      <div className="flex grow flex-col items-center w-full h-full bg-white">
        <section className="flex flex-col items-center w-4/5">
          <h2 className="pt-6 text-2xl md:text-3xl">Interview Questions App</h2>
          <p className="mt-6 text-lg text-center lg:w-3/5 lg:text-lg">
            This application was created for people who are preparing for a job
            interview in the field of JavaScript. I wanted access to questions
            from any device, so the application is fully responsive.
          </p>
        </section>
        <section className="flex items-center flex-col w-4/5 mt-8">
          <LinkList />
        </section>
        <section className="flex flex-col w-4/5 mt-10">
          <h2 className="xs:text-sm text-xl text-center">Project Tech Stack</h2>
          <TechStackList />
        </section>
      </div>
    </>
  )
}

export default page
