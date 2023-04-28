'use client'

// lib
import { useEffect, useState } from 'react'

// componenets
import Button from '../components/Button'
import QuestionSection from './QuestionSection'
import Answer from './Answer'
import Done from './Done'

const baseOfQuestions = [
  {
    question: 'What are first-class functions?',
    answare:
      'In some programming languages, there is a concept of first-class functions. First-class functions are those treated like ordinary variables. You can assign them to some other variable, pass them as an argument to other functions, and return them from another function.',
  },
  {
    question: 'What are the function statements and function expressions?',
    answare:
      'When a function gets created using the function keyword, it’s called a function statement. Assigning a function to a variable is a function expression.',
  },
  {
    question: 'What are first-order functions?',
    answare:
      'A first-order function does not take another function as an argument or return a function.',
  },
  {
    question: 'What are higher-order functions?',
    answare:
      'Higher-order functions can accept a function as an argument or return a function as a result.',
  },
  {
    question: 'What are pure functions?',
    answare:
      'Pure functions are those whose return values only depend on the arguments they receive. We get the same return value if we call a pure function with the same arguments.',
  },
  {
    question: 'What is function currying?',
    answare:
      'Function currying is a process in which we convert a function with multiple parameters to a chain of functions with a single parameter.',
  },
  {
    question: 'What is prototype chaining?',
    answare:
      'Prototype chaining is the process of building new objects from old ones. Essentially, it’s like inheritance in a class-based language.',
  },
  {
    question:
      'What is the difference between the null and the undefined values?',
    answare:
      'Variables get assigned a null value to indicate they are declared and assigned but don’t point to anything. A undefined variable is declared but not initialized.',
  },
  {
    question: 'What is a strict mode in javascript?',
    answare:
      'ECMAScript 5 introduced a strict mode that executed the programs and functions strictly. To use strict mode, we write "use strict"; on the top of our JavaScript file.',
  },
  {
    question: 'What is the difference between == and ===?',
    answare:
      'The == operator is also called a type-converting equality check operator. When we compare values of different data types, it attempts to do type conversions before checking the equality. The === operator is also called a strict equality operator. JavaScript engine will make no type conversions in this case.',
  },
  {
    question: 'What are arrow functions?',
    answare:
      'An arrow function is a compact way of declaring a function. Functions declared using arrow syntax don’t have this, arguments bindings. First-class cannot use these functions to create a class constructor.',
  },
  {
    question: 'What is JSON?',
    answare:
      'JSON stands for JavaScript Object Notation. It stores data in a format similar to JavaScript objects',
  },
  {
    question: 'What is hoisting?',
    answare:
      'Hoisting is the process by which the JavaScript engine sets aside memory for variables, functions, and classes to give the impression that they are at the top of the code.',
  },
  {
    question: 'What is memorization?',
    answare:
      'Memorization is a technique that saves calculated results to improve a function’s efficiency. The arguments given to the function serve as the cache object’s key. If a key is present, the function returns the result immediately. Otherwise, the function computes the result, saves it in the cache, and returns it.',
  },
  {
    question: 'What are closures?',
    answare:
      'A function bound to its immediate surroundings creates a closure. Essentially, a function defined inside another function is a closure. The variables and operations of the outer function are accessible to the inner function.',
  },
  {
    question: 'What is scope in JavaScript?',
    answare:
      'A scope is a code section allowing us to access specific variables and functions. It determines the visibility of variables and functions. Variables and functions declared within a particular scope cannot be accessible outside the scope.',
  },
  {
    question:
      'What is the difference between local storage and session storage?',
    answare:
      'Both local storage and session storage store data. Local storage persists the data even when we close the browser. In contrast, session storage removes the data when we close the browser tab.',
  },
  {
    question: 'What is a JavaScript promise?',
    answare:
      'A promise is a JavaScript object that may or may not produce a value in the future. In other words, the promise object yields a single value when resolved. A promise object can have one of three states: pending, fulfilled, and rejected.',
  },
  {
    question: 'What is a callback function?',
    answare:
      'A function passed as an argument to some other function is a callback function. We will invoke the callback function within the function to accomplish the desired result.',
  },
  {
    question: 'What is callback hell?',
    answare:
      'Callback Hell is a pattern that consists of multiple nested callback functions. It is an anti-pattern because the code is hard to read and modify.',
  },
]

const questionsBaseLength = baseOfQuestions.length

const Page = () => {
  const [filled, setFilled] = useState(1)
  const [isRunning, setIsRunning] = useState(true)
  const [index, setIndex] = useState(0)

  // Below is to change. Not nessesery to use useState for establish is it last question
  const [isLastQuestion, setIsLastQuestion] = useState(false)

  const question = baseOfQuestions[index].question
  const answer = baseOfQuestions[index].answare

  const showAnswer = () => {
    setIsRunning(false)
    setFilled(100)
  }

  const nextQuestion = () => {
    if (index < baseOfQuestions.length - 1) {
      setIndex((prev) => (prev += 1))
      setIsRunning(true)
      setFilled(1)
    } else {
      setIsLastQuestion(true)
      setIsRunning(false)
      setFilled(100)
    }
  }

  useEffect(() => {
    if (filled <= 100 && isRunning) {
      setTimeout(() => setFilled((prev) => (prev += 1)), 50)
    } else {
      setTimeout(() => setIsRunning(false), 50)
    }
  }, [filled, isRunning])

  return (
    <>
      {isLastQuestion ? (
        <>
          <Done />
        </>
      ) : (
        <>
          <QuestionSection
            index={index}
            isLastQuestion={isLastQuestion}
            questionsBaseLength={questionsBaseLength}
            filled={filled}
            question={question}
          />

          {!isRunning ? (
            /* show answer and 'next question' button */
            <>
              <section className="mt-5  h-96 bg-[#23216D] rounded-lg opacity-1 transition-all duration-300">
                <Answer answer={answer} />
              </section>
              <Button onClick={nextQuestion} text={'next question'} />
            </>
          ) : (
            /* hide answer and show 'show answer' button */
            <>
              <section className="mt-5 translate-x-96 h-96 rounded-lg opacity-0"></section>
              <Button onClick={showAnswer} text={'show answer'} />
            </>
          )}
        </>
      )}
    </>
  )
}

export default Page
