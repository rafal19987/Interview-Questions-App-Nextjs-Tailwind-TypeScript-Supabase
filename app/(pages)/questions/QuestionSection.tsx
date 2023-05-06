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
    <section className="w-full min-h-[10rem] max-h-full">
      <p className="w-full h-5 text-black">
        <span>
          Question {index + 1} of {questionsBaseLength}
        </span>
      </p>
      <div className="relative flex flex-col items-center w-full min-h-[10rem] max-h-[calc(100%-1.25rem)] mt-2 border-2 border-[#FF7900]/50 rounded-lg">
        <h1 className="p-4 pb-8 text-2xl text-center text-black">{question}</h1>
        <ProgressBar filled={filled} />
      </div>
    </section>
  );
};

export default QuestionSection;
