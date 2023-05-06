// components
import ProgressBar from './ProgressBar';

interface QuestionType {
  index: number;
  questionsBaseLength: number;
  question: string;
  filled: number;
}

const QuestionSection = ({
  index,
  questionsBaseLength,
  question,
  filled,
}: QuestionType): JSX.Element => {
  return (
    <section className="w-full h-40">
      <p className="w-full h-5 text-black">
        <span>
          Question {index + 1} of {questionsBaseLength}
        </span>
      </p>
      <div className="relative flex flex-col items-center rounded-lg mt-2 border-2 border-[#FF7900]/50 h-[calc(100%-1.25rem)] w-full">
        <h1 className="p-4 text-2xl text-center text-black">{question}</h1>
        <ProgressBar filled={filled} />
      </div>
    </section>
  );
};

export default QuestionSection;
