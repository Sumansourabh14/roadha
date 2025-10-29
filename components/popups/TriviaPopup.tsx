"use client";

import data from "@/data/trivia.json";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Button } from "../ui/button";

const TRIVIA_KEY = "roadha_trivia_answered";

const TriviaPopup = () => {
  const [open, setOpen] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(TRIVIA_KEY);

    if (!stored) {
      setOpen(true);
    } else {
      setAnswered(true);
    }
  }, []);

  const handleOptionClick = (index: number) => {
    setAnswered(true);
    setSelectedAnswer(index);
    localStorage.setItem(TRIVIA_KEY, JSON.stringify({ selected: index }));
  };

  const renderCTA = () => {
    if (selectedAnswer === null) {
      return null;
    }

    return selectedAnswer === data[2].correct ? (
      <div className="mt-4 text-green-600 font-semibold space-y-2">
        <p>✅ Correct! You&apos;re road smart.</p>
        <Link href={`/`}>
          <Button
            className="mt-2 cursor-pointer"
            onClick={() => setOpen(false)}
          >
            Start Exploring
          </Button>
        </Link>
      </div>
    ) : (
      <div className="mt-4 text-red-600 font-semibold space-y-2">
        <p>❌ Not quite. That&apos;s not the safest option.</p>
        <Link href={`/learn/road-safety-course-beginners`}>
          <Button
            variant="destructive"
            className="mt-2 cursor-pointer"
            onClick={() => setOpen(false)}
          >
            Learn What to Do
          </Button>
        </Link>
      </div>
    );
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild></AlertDialogTrigger>
      <AlertDialogContent className="[&_button[data-dialog-close]]:hidden">
        <AlertDialogHeader>
          <AlertDialogTitle>{data[2].question}</AlertDialogTitle>
          {/* <p>{data[2].question}</p> */}
        </AlertDialogHeader>
        {!answered ? (
          <ul className="space-y-2 mt-4">
            {data[2].options.map((opt, index) => (
              <li key={index}>
                <Button
                  variant="outline"
                  className="w-full justify-start cursor-pointer"
                  onClick={() => handleOptionClick(index)}
                >
                  {opt}
                </Button>
              </li>
            ))}
          </ul>
        ) : (
          <>
            <p className="mt-4 text-gray-700">
              You answered: <b>{data[2].options[selectedAnswer!]}</b>
            </p>
            {renderCTA()}
          </>
        )}
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default TriviaPopup;
