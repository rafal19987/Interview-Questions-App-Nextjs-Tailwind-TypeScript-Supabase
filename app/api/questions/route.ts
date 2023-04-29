// lib
import { NextResponse } from 'next/server'

interface QuestionsProps {
  id: number
  question: string
  answer: string
}

const questions: QuestionsProps[] = [
  {
    id: 0,
    question: 'What are first-class functions?',
    answer:
      'In some programming languages, there is a concept of first-class functions. First-class functions are those treated like ordinary variables. You can assign them to some other variable, pass them as an argument to other functions, and return them from another function.',
  },
  {
    id: 1,
    question: 'What are the function statements and function expressions?',
    answer:
      'When a function gets created using the function keyword, it’s called a function statement. Assigning a function to a variable is a function expression.',
  },
  {
    id: 2,
    question: 'What are first-order functions?',
    answer:
      'A first-order function does not take another function as an argument or return a function.',
  },
  {
    id: 3,
    question: 'What are higher-order functions?',
    answer:
      'Higher-order functions can accept a function as an argument or return a function as a result.',
  },
  {
    id: 4,
    question: 'What are pure functions?',
    answer:
      'Pure functions are those whose return values only depend on the arguments they receive. We get the same return value if we call a pure function with the same arguments.',
  },
  {
    id: 5,
    question: 'What is function currying?',
    answer:
      'Function currying is a process in which we convert a function with multiple parameters to a chain of functions with a single parameter.',
  },
  {
    id: 6,
    question: 'What is prototype chaining?',
    answer:
      'Prototype chaining is the process of building new objects from old ones. Essentially, it’s like inheritance in a class-based language.',
  },
  {
    id: 7,
    question:
      'What is the difference between the null and the undefined values?',
    answer:
      'Variables get assigned a null value to indicate they are declared and assigned but don’t point to anything. A undefined variable is declared but not initialized.',
  },
  {
    id: 8,
    question: 'What is a strict mode in javascript?',
    answer:
      'ECMAScript 5 introduced a strict mode that executed the programs and functions strictly. To use strict mode, we write "use strict"; on the top of our JavaScript file.',
  },
  {
    id: 9,
    question: 'What is the difference between == and ===?',
    answer:
      'The == operator is also called a type-converting equality check operator. When we compare values of different data types, it attempts to do type conversions before checking the equality. The === operator is also called a strict equality operator. JavaScript engine will make no type conversions in this case.',
  },
  {
    id: 10,
    question: 'What are arrow functions?',
    answer:
      'An arrow function is a compact way of declaring a function. Functions declared using arrow syntax don’t have this, arguments bindings. First-class cannot use these functions to create a class constructor.',
  },
  {
    id: 11,
    question: 'What is JSON?',
    answer:
      'JSON stands for JavaScript Object Notation. It stores data in a format similar to JavaScript objects',
  },
  {
    id: 12,
    question: 'What is hoisting?',
    answer:
      'Hoisting is the process by which the JavaScript engine sets aside memory for variables, functions, and classes to give the impression that they are at the top of the code.',
  },
  {
    id: 13,
    question: 'What is memorization?',
    answer:
      'Memorization is a technique that saves calculated results to improve a function’s efficiency. The arguments given to the function serve as the cache object’s key. If a key is present, the function returns the result immediately. Otherwise, the function computes the result, saves it in the cache, and returns it.',
  },
  {
    id: 14,
    question: 'What are closures?',
    answer:
      'A function bound to its immediate surroundings creates a closure. Essentially, a function defined inside another function is a closure. The variables and operations of the outer function are accessible to the inner function.',
  },
  {
    id: 15,
    question: 'What is scope in JavaScript?',
    answer:
      'A scope is a code section allowing us to access specific variables and functions. It determines the visibility of variables and functions. Variables and functions declared within a particular scope cannot be accessible outside the scope.',
  },
  {
    id: 16,
    question:
      'What is the difference between local storage and session storage?',
    answer:
      'Both local storage and session storage store data. Local storage persists the data even when we close the browser. In contrast, session storage removes the data when we close the browser tab.',
  },
  {
    id: 17,
    question: 'What is a JavaScript promise?',
    answer:
      'A promise is a JavaScript object that may or may not produce a value in the future. In other words, the promise object yields a single value when resolved. A promise object can have one of three states: pending, fulfilled, and rejected.',
  },
  {
    id: 18,
    question: 'What is a callback function?',
    answer:
      'A function passed as an argument to some other function is a callback function. We will invoke the callback function within the function to accomplish the desired result.',
  },
  {
    id: 19,
    question: 'What is callback hell?',
    answer:
      'Callback Hell is a pattern that consists of multiple nested callback functions. It is an anti-pattern because the code is hard to read and modify.',
  },
]

export async function GET() {
  return NextResponse.json(questions)
}
