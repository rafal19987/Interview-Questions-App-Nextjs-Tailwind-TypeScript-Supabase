'use client';

import { useEffect, useState } from 'react';
import { supabase } from 'lib/supabaseClient';
import Button from 'components/Button';
import QuestionSection from './QuestionSection';
import Answer from './Answer';
import Done from './Done';

interface QuestionsProps {
  id: number;
  question: string;
  answer: string;
}

const Page = () => {
  const [questions, setQuestions] = useState<QuestionsProps[]>([]);
  const [filled, setFilled] = useState<number>(1);
  const [isRunning, setIsRunning] = useState<boolean>(true);
  const [index, setIndex] = useState<number>(0);
  const [isLastQuestion, setIsLastQuestion] = useState<boolean>(false);

  const getIndexFromLocalStorage = (): void => {
    const isSavedInLocalStorage: number = JSON.parse(
      localStorage.getItem('index') || 'false'
    );
    if (isSavedInLocalStorage) {
      setIndex(isSavedInLocalStorage);
    }
  };

  const saveIndexToLocalStorage = (): void => {
    localStorage.setItem('index', JSON.stringify(index + 1));
  };

  const showAnswer = (): void => {
    setIsRunning(false);
    setFilled(100);
  };

  const nextQuestion = (): void => {
    if (index < questions.length - 1) {
      setIndex((prev) => (prev += 1));
      saveIndexToLocalStorage();
      setIsRunning(true);
      setFilled(1);
    } else {
      localStorage.removeItem('index');
      setIsLastQuestion(true);
      setIsRunning(false);
      setFilled(100);
    }
  };

  useEffect(() => {
    getIndexFromLocalStorage();

    const getQuestions = async (): Promise<void> => {
      const { data }: { data: QuestionsProps[] } = await supabase
        .from('questions')
        .select('*');
      setQuestions(data);
    };

    getQuestions();
  }, []);

  useEffect(() => {
    if (filled <= 100 && isRunning) {
      setTimeout(() => setFilled((prev) => (prev += 1)), 50);
    } else {
      setTimeout(() => setIsRunning(false), 50);
    }
  }, [filled, isRunning]);

  return (
    <div className="flex flex-col items-center w-full md:w-[400px]">
      {questions.length ? (
        isLastQuestion ? (
          <>
            <Done />
          </>
        ) : (
          <>
            <QuestionSection
              index={index}
              questionsBaseLength={questions.length}
              filled={filled}
              question={questions[index].question}
            />
            {!isRunning ? (
              /* show answer and 'next question' button */
              <>
                <section className="mt-5  h-96 bg-[#FF7900]/20 rounded-lg opacity-1 transition-all duration-300">
                  <Answer answer={questions[index].answer} />
                </section>
                <div className="mt-12">
                  <Button onClick={nextQuestion} text={'next question'} />
                </div>
              </>
            ) : (
              /* hide answer and show 'show answer' button */
              <>
                <section className="mt-5 translate-x-96 h-96 rounded-lg opacity-0"></section>
                <div className="mt-12">
                  <Button onClick={showAnswer} text={'show answer'} />
                </div>
              </>
            )}
          </>
        )
      ) : null}
    </div>
  );
};

export default Page;
