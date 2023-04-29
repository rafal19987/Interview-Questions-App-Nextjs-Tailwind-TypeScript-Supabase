'use client'

// lib
import { useEffect, useState } from 'react'

// componenets
import Button from '../components/Button'
import QuestionSection from './QuestionSection'
import Answer from './Answer'
import Done from './Done'

interface QuestionsProps {
  id: number
  question: string
  answer: string
}

const Page = () => {
  const [questions, setQuestions] = useState<QuestionsProps[]>([])
  const [filled, setFilled] = useState(1)
  const [isRunning, setIsRunning] = useState(true)
  const [index, setIndex] = useState(0)

  // Below is to change. Not nessesery to use useState for establish is it last question
  const [isLastQuestion, setIsLastQuestion] = useState(false)

  const questionsBaseLength = questions.length

  const showAnswer = () => {
    setIsRunning(false)
    setFilled(100)
  }

  const nextQuestion = () => {
    if (index < questions.length - 1) {
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
    const getQuestions = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`)
      const data = await res.json()
      setQuestions(data)
    }
    getQuestions()
  }, [])

  useEffect(() => {
    if (filled <= 100 && isRunning) {
      setTimeout(() => setFilled((prev) => (prev += 1)), 50)
    } else {
      setTimeout(() => setIsRunning(false), 50)
    }
  }, [filled, isRunning])

  return (
    <>
      {questions.length ? (
        isLastQuestion ? (
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
              question={questions[index].question}
            />

            {!isRunning ? (
              /* show answer and 'next question' button */
              <>
                <section className="mt-5  h-96 bg-[#23216D] rounded-lg opacity-1 transition-all duration-300">
                  <Answer answer={questions[index].answer} />
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
        )
      ) : (
        <>Loading..</>
      )}
    </>
  )
}

export default Page
