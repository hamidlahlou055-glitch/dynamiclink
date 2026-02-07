
import { GoogleGenAI, Type } from "@google/genai";
import { PreviewData } from "../types";

const API_KEY = process.env.API_KEY || "";

export const generateNewsPreview = async (topic: string = "Global News"): Promise<Partial<PreviewData>> => {
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Generate a single "VIRAL" and "CURIOSITY-DRIVEN" news headline for the topic: ${topic}. 
    It should look like a shocking update or urgent alert that people would want to click.
    Include a short intriguing description and a professional news site name.
    Format the output as JSON.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING },
          description: { type: Type.STRING },
          siteName: { type: Type.STRING }
        },
        required: ["title", "description", "siteName"]
      }
    }
  });

  try {
    const data = JSON.parse(response.text || "{}");
    return data;
  } catch (error) {
    console.error("Failed to parse AI response", error);
    return {
      title: "Urgente: El Cambio que Nadie Esperaba",
      description: "Las últimas 24 horas han cambiado el panorama por completo. Entérate de los detalles aquí.",
      siteName: "Global Flash"
    };
  }
};

export const generateNewsImage = async (prompt: string): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [
        {
          text: `A professional editorial news photo for a headline about: ${prompt}. Realist style, high contrast, dramatic lighting, 16:9 aspect ratio. No text in image.`,
        },
      ],
    },
    config: {
      imageConfig: {
        aspectRatio: "16:9",
      },
    },
  });

  for (const part of response.candidates?.[0]?.content?.parts || []) {
    if (part.inlineData) {
      return `data:image/png;base64,${part.inlineData.data}`;
    }
  }
  
  return `https://picsum.photos/seed/${Math.random()}/800/450`;
};
