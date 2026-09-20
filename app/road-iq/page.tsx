"use client";
import H1 from "@/components/text/H1";
import data from "@/data/roadiq/questions.json";
import metrics from "@/data/roadiq/metrics.json";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Info } from "lucide-react";

function RoadIQ() {
  const [score, setScore] = useState<number | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const { scenario } = data;

  const metric =
    score !== null
      ? metrics.find((metric) => score >= metric.min && score <= metric.max)
      : null;

  return (
    <main className="mx-auto min-h-[70vh] max-w-[1000px] px-6 py-16">
      <div className="text-center">
        <H1 title="What would you do?" />
      </div>

      {/* Scenario */}
      <div className="mx-auto mt-8 max-w-2xl">
        <div className="relative aspect-video overflow-hidden rounded-2xl bg-muted">
          <Image
            src="/images/pedestrian-crossing.webp"
            alt="Zebra Crossing"
            fill
            className="object-cover"
          />
        </div>

        <p className="mt-8 text-lg font-medium">{scenario.question}</p>

        <div className="mt-6 space-y-3">
          {scenario.options.map((option) => {
            const isSelected = selectedOption === option.id;
            const isCorrect = option.score === 100;

            let borderClass = "border";

            if (selectedOption !== null) {
              if (isSelected && isCorrect) {
                borderClass = "border-green-500 bg-green-50";
              } else if (isSelected && !isCorrect) {
                borderClass = "border-red-500 bg-red-50";
              } else if (!isSelected && isCorrect) {
                borderClass = "border-green-500 bg-green-50";
              }
            }

            return (
              <button
                key={option.id}
                onClick={() => {
                  setSelectedOption(option.id);
                  setScore(option.score);
                }}
                disabled={selectedOption !== null}
                className={`w-full rounded-xl border p-4 text-left transition ${borderClass}`}
              >
                <span className="font-medium uppercase">{option.id}.</span>{" "}
                {option.text}
              </button>
            );
          })}
        </div>

        {score !== null && metric && (
          <div className="mt-8 rounded-2xl border p-6 text-center">
            <p className="text-sm uppercase tracking-widest text-muted-foreground">
              Your Road IQ
            </p>

            <p className="mt-2 text-5xl font-bold">{score}</p>

            <h3 className="mt-4 text-xl font-semibold">{metric.title}</h3>

            <p className="mt-2 text-muted-foreground">{metric.description}</p>

            <p className="mt-6 text-sm text-muted-foreground">
              {scenario.explanation}
            </p>

            <div className="mt-8">
              <Link href="/road-safety/beginner">
                <Button className="text-base px-6 py-5 cursor-pointer">
                  Learn road safety
                </Button>
              </Link>
            </div>
          </div>
        )}

        <div className="mt-8 text-center">
          <Link
            href="https://forms.gle/hnv3JZwkMs9bwP3R6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
          >
            Something feel off? Give feedback
          </Link>
        </div>

        <div className="mt-8 flex items-start justify-center gap-2 text-muted-foreground">
          <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" />

          <p className="max-w-xl text-xs leading-relaxed">
            Road IQ is a quick road-safety decision check.{" "}
            <span className="font-medium">Score: 0–100.</span> It reflects your
            decision in this situation, not your actual driving ability.
          </p>
        </div>
      </div>
    </main>
  );
}

export default RoadIQ;
