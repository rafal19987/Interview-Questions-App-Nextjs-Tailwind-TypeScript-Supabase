// components
import QuestionsProgressBar from './QuestionsProgressBar'

interface QuestionType {
  isLastQuestion: boolean
  index: number
  questionsBaseLength: number
  question: string
  filled: number
}

const QuestionSection = ({
  isLastQuestion,
  index,
  questionsBaseLength,
  question,
  filled,
}: QuestionType) => {
  return (
    <section className="w-full h-40">
      <p className="w-full h-5 text-black">
        {isLastQuestion ? (
          <span>Last Question</span>
        ) : (
          <span>
            Question {index + 1} of {questionsBaseLength}
          </span>
        )}
      </p>
      <div className="relative flex flex-col items-center rounded-lg mt-2 border-2 border-[#FF7900]/50 h-[calc(100%-1.25rem)] w-full border-2 borded-red-500">
        <h1 className="p-4 text-2xl text-center text-black">{question}</h1>
        <QuestionsProgressBar filled={filled} />
      </div>
    </section>
  )
}

export default QuestionSection
