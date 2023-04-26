// components
import TechStackList from './TechStackList'
import LinkList from './LinkList'

const page = () => {
  return (
    <>
      <div className="flex flex-col p-6 w-screen h-full">
        <section>
          <h1 className="text-2xl text-center">Interview Questions App</h1>
          <p className="mt-6 text-m text-center">
            This application was created for people who are preparing for a job
            interview in the field of JavaScript. I wanted access to questions
            from any device, so the application is fully responsive.
          </p>
        </section>
        <section className="flex flex-col mt-10">
          <div>
            <LinkList />
          </div>
          <div className="flex flex-col w-auto mt-20">
            <h2 className="xs:text-sm text-xl text-center">
              Project Tech Stack
            </h2>
            <TechStackList />
          </div>
        </section>
      </div>
    </>
  )
}

export default page
