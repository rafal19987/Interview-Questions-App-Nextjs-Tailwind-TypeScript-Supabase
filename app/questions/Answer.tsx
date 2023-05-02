interface AnswerProps {
  answer: string
}

const Answer = ({ answer }: AnswerProps) => {
  return <h2 className="p-6 text-xl text-center text-black">{answer}</h2>
}

export default Answer
