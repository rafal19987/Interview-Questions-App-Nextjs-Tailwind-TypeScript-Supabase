'use client'

// lib
import { useEffect, useState } from 'react'

// componenets
import QuestionsProgressBar from './QuestionsProgressBar'

const Page = () => {
  const [filled, setFilled] = useState(1)
  const [isRunning, setIsRunning] = useState(true)

  useEffect(() => {
    if (filled <= 100 && isRunning) {
      setTimeout(() => setFilled((prev) => (prev += 1)), 50)
    } else {
      setTimeout(() => setIsRunning(false), 50)
    }
  }, [filled, isRunning])

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-full p-6">
        <section className="w-full h-40">
          <p className=" text-zinc-600 h-5">Question 1 of 10</p>
          <div className="relative flex flex-col items-center  rounded-lg border-2 border-violet-700 h-[calc(100%-1.25rem)] w-full">
            <h1 className="p-4 text-2xl text-center">What is hoisting?</h1>
            <div className="absolute flex justify-start items-center bottom-1 w-11/12 h-3 m-1 p-1 rounded-lg bg-cyan-800">
              <QuestionsProgressBar filled={filled} />
            </div>
          </div>
        </section>
        <section className="mt-5 h-72">
          {!isRunning && (
            <h2 className="p-6 text-md text-center">
              JavaScript Hoisting refers to the process whereby the interpreter
              appears to move the declaration of functions, variables or classes
              to the top of their scope, prior to execution of the code{' '}
            </h2>
          )}
        </section>
        {!isRunning ? (
          <button className="mt-12 border-2 border-violet-500 w-40 h-12 rounded-lg  text-violet-500">
            Next Question
          </button>
        ) : (
          <button
            className="mt-12 border-2 border-violet-500 w-40 h-12 rounded-lg  text-violet-500"
            onClick={() => {
              setIsRunning(false)
              setFilled(100)
            }}
          >
            Show Question
          </button>
        )}
      </div>
    </>
  )
}

export default Page
