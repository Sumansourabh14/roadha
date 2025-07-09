"use client";

import quizData from "@/data/quiz/beginner/wear-seatbelts.json"; // ← import like this
import { useState } from "react";
import QuizButton from "../buttons/QuizButton";
import { Button } from "../ui/button";

export default function LessonQuiz() {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);

  const questions = quizData;
  const q = questions[index];
  const isPositiveOutcome = selected !== null && selected === q.answer;

  const handleSelect = (i: number) => {
    setSelected(i);
    const selectedOptionIndex = q.answer;
    const isCorrect = i === selectedOptionIndex;

    if (isCorrect) {
      setScore(score + q.xp);
      setStreak(streak + 1);
    } else {
      setStreak(0);
    }
  };

  const handleNext = () => {
    setSelected(null);
    setIndex(index + 1);
  };

  if (index >= questions.length)
    return (
      <div className="text-center mt-10">
        <h2 className="text-2xl font-bold">🎉 Quiz Complete!</h2>
        <p className="text-lg">Your XP: {score}</p>
        <p className="text-md text-gray-600">🔥 Final Streak: {streak}</p>
      </div>
    );

  return (
    <section className="max-w-xl mx-auto p-6">
      <h4 className="text-xl font-semibold mb-4">Question {index + 1}</h4>
      <p className="mb-4" dangerouslySetInnerHTML={{ __html: q.question }}></p>

      {q.options?.map((opt, i) => (
        <Button
          key={i}
          variant="ghost"
          className={`block w-full text-left p-2 my-1 border rounded cursor-pointer 
            ${
              selected === i
                ? "bg-blue-200 text-black dark:bg-blue-800 dark:text-white border-blue-500"
                : "bg-white text-black dark:bg-transparent dark:text-white border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
            }
    `}
          onClick={() => handleSelect(i)}
          disabled={selected !== null}
        >
          {opt}
        </Button>
      ))}

      {selected !== null && (
        <p
          className={`mt-3 font-medium ${
            isPositiveOutcome ? "text-green-600" : "text-red-600"
          }`}
        >
          {isPositiveOutcome
            ? "✅ Correct Answer!"
            : `❌ Oops! Incorrect. Correct Answer: ${q.options[q.answer]}`}
        </p>
      )}

      <QuizButton
        disabled={selected === null}
        onClick={handleNext}
        title="Next"
      />

      <section className="mt-4 text-sm text-gray-600">
        XP: {score} | 🔥 Streak: {streak}
      </section>
    </section>
  );
}
