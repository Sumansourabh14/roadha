"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import axios, { AxiosError } from "axios";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

type ResponseProps = {
  id: string;
  output: string;
};

interface GeminiResponse {
  output: string;
}

const AskRoadha = () => {
  const [prompt, setPrompt] = useState<string>("");
  const [responses, setResponses] = useState<ResponseProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAskRoadha = async () => {
    if (!prompt) return;

    setIsLoading(true);
    setError(null);

    try {
      const res = await axios.post<GeminiResponse>(`/api/gemini`, { prompt });
      console.log({ res });

      setResponses([
        ...responses,
        {
          id: Date.now().toString(),
          output: res.data.output,
        },
      ]);
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        setError(error.message || "An error occurred");
      } else {
        setError("An unexpected error occurred");
      }
    } finally {
      setIsLoading(false);
      setPrompt("");
    }
  };

  return (
    <section className="py-32 min-h-[40rem]">
      <section className="max-w-2xl mx-auto px-4 py-6">
        {error && <p className="text-red-500">{error}</p>}
        {responses.length === 0 && !error && (
          <h1 className="text-center text-4xl font-bold">Ask Roadha...</h1>
        )}
        <section className="max-w-2xl mx-auto px-4 py-6 space-y-6">
          {responses.map((item) => (
            <div key={item.id} className="prose ">
              <ReactMarkdown>{item.output}</ReactMarkdown>
              <hr />
            </div>
          ))}
        </section>
        <section className="flex flex-col gap-8">
          <Textarea
            placeholder="Type anything about road safety/indian vehicles/laws/rules/tips..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <Button
            onClick={handleAskRoadha}
            disabled={prompt.length === 0 || isLoading}
            className="cursor-pointer"
          >
            {isLoading ? "Loading..." : "Ask"}
          </Button>
        </section>
      </section>
    </section>
  );
};

export default AskRoadha;
