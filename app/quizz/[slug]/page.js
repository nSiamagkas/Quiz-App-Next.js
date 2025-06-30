"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { historyQuestions } from "@/data/history";
import { mathQuestions } from "@/data/math";
import { scienceQuestions } from "@/data/sience";
import Link from "next/link";
import { Button } from "@/components/Button";

const questionMap = {
  history: historyQuestions,
  math: mathQuestions,
  science: scienceQuestions,
};

export default function Page({ params }) {
  const { slug } = params;
  const questions = questionMap[slug] || [];
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  if (questions.length === 0) {
    return <div>No questions found for this category.</div>;
  }

  const question = questions[current];

  const handleOptionClick = (option) => {
    setSelected(option);
  };

  const handleNext = () => {
    if (!selected) {
      toast.error("Please select an answer before proceeding.");
      return;
    }

    if (selected === question.answer) {
      setScore((prev) => prev + 1);
    }
    setSelected(null);
    if (current === questions.length - 1) {
      setShowScore(true);
    } else {
      setCurrent((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (current > 0) {
      setCurrent((prev) => prev - 1);
      setSelected(null);
    }
  };

  if (showScore) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-2xl font-bold mb-6">Quiz Finished!</h1>
        <div className="text-xl">
          Your score: {score} / {questions.length}
        </div>
        <Link
          href="/"
          className="flex items-center px-8 py-2 mt-2 rounded-full bg-neutral-300/20 hover:bg-neutral-300/30 backdrop-blur-[1px] border border-neutral-400/20 text-xl uppercase
"
        >
          Go Back
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-6">
        Quiz: {slug.charAt(0).toUpperCase() + slug.slice(1)}
      </h1>
      <div className="w-full max-w-2xl">
        <div className="mb-4 p-4 border rounded-lg">
          <h2 className="text-lg font-semibold mb-2">{question.question}</h2>
          <ul className="list-decimal pl-5">
            {question.options.map((option, index) => (
              <li
                key={index}
                className={`mb-1 cursor-pointer p-1 rounded ${
                  selected === option ? "bg-blue-500" : ""
                }`}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-between mt-4">
          <Button onClick={handlePrev}>Previous</Button>
          <Button onClick={handleNext}>
            {current === questions.length - 1 ? "Finish" : "Next"}
          </Button>
        </div>
        <div className="mt-2 text-center text-sm text-gray-500">
          Question {current + 1} of {questions.length}
        </div>
        <div className="mt-2 text-center text-sm text-gray-500">
          Score: {score}
        </div>
      </div>
    </div>
  );
}
