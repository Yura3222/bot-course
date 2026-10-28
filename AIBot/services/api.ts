import "dotenv/config";
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
    throw new Error("GEMINI_API_KEY is missing in .env file");
}

const ai = new GoogleGenAI({
    apiKey: API_KEY,
});

export async function askGemini(
    userMessage: string
): Promise<string> {
    const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: `Відповідай завжди українською мовою.
Пояснюй зрозуміло й просто.

Запитання користувача: ${userMessage}`,
    });

    return response.text ?? "Gemini не повернув відповідь.";
}
