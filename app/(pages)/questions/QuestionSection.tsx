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
}: QuestionType) => {
  return (
    <section className='w-full min-h-[10rem] max-h-full'>
      <p className='w-full h-5 text-sm text-[#ACA4B2]'>
        <span>
          Question {index + 1} of {questionsBaseLength}
        </span>
      </p>
      <div className='relative flex flex-col items-center w-full min-h-[10rem] max-h-[calc(100%-1.25rem)] mt-2 border-2 border-[#2B825B] rounded-lg'>
        <h2 className='p-4 pb-8 text-lg text-center text-[#ACA4B2] font-bold'>
          {question}
        </h2>
        <ProgressBar filled={filled} />
      </div>
    </section>
  );
};

export default QuestionSection;
