import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({});

async function geminiAI(content: string) {
  if (content.length === 0) return;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: content,
    config: {
      thinkingConfig: {
        thinkingBudget: 0, // Disables thinking
      },
      systemInstruction:
        "The Question asked from the user should be anything related road safety in India, road rules/tips., about cars, vehicles. Response should be given automatically",
    },
  });

  return response.text;
}

export default geminiAI;
