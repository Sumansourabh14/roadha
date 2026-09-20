"use client";
import H1 from "@/components/text/H1";
import data from "@/data/roadiq/questions.json";
import metrics from "@/data/roadiq/metrics.json";
import { useState } from "react";
import Image from "next/image";

function RoadIQ() {
  const [score, setScore] = useState<number | null>(null);
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
          {scenario.options.map((option) => (
            <button
              key={option.id}
              onClick={() => setScore(option.score)}
              disabled={score !== null}
              className="w-full rounded-xl border p-4 text-left transition hover:bg-muted disabled:cursor-default disabled:opacity-60"
            >
              <span className="font-medium uppercase">{option.id}.</span>{" "}
              {option.text}
            </button>
          ))}
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
          </div>
        )}
      </div>
    </main>
  );
}

export default RoadIQ;
