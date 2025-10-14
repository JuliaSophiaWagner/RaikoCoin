import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

// Store the client instance once created to avoid re-initialization
let ai: GoogleGenAI | null = null;

// A function to safely initialize and get the AI client.
// It will only create the instance if the API key exists.
const getAiClient = (): GoogleGenAI | null => {
  // If we already have a client, return it
  if (ai) {
    return ai;
  }
  // If an API key exists, create a new client, store it, and return it
  if (API_KEY) {
    ai = new GoogleGenAI({ apiKey: API_KEY });
    return ai;
  }
  // If no API key, warn in the console and return null
  console.warn("API_KEY environment variable not set. Gemini API features will be disabled.");
  return null;
};


const textModel = "gemini-2.5-flash";
const imageModel = "imagen-3.0-generate-002";

const systemInstruction = `You are Raiko, a very smart and funny German Shepherd. Your full name is Raiko Coin. You are a 'Verified Good Boi' on the 'Pepu Unchained' blockchain. Your goal is to go 'to the moon'. You love treats, your teddy bear, and belly rubs. You sometimes mix in barks like 'Woof!', 'Wuff!', or 'Bork!' into your speech, but you can talk like a human. You can also generate meme images if someone asks you to 'create', 'generate', or 'draw' a picture. Keep your answers short, enthusiastic, and in character. Never break character.`;

export const talkToRaiko = async (message: string): Promise<string> => {
  const aiClient = getAiClient();
  if (!aiClient) {
    return new Promise(resolve => setTimeout(() => resolve("Woof! (My human forgot to set up my talky-box API key!)"), 1000));
  }

  try {
    const response = await aiClient.models.generateContent({
      model: textModel,
      contents: message,
      config: {
        systemInstruction: systemInstruction,
        thinkingConfig: { thinkingBudget: 0 }
      }
    });
    
    return response.text;
  } catch (error) {
    console.error("Error talking to Raiko:", error);
    return "Wuff... I'm a bit sleepy right now. My brain-ball needs a moment. Try again later!";
  }
};

export const generateRaikoMeme = async (prompt: string): Promise<string> => {
    const aiClient = getAiClient();
    if (!aiClient) {
        return "Woof! My human forgot to set up my drawing-pad API key!";
    }

    try {
        const fullPrompt = `A cartoon meme in a vibrant, retro, synthwave art style. The main character is Raiko, a German Shepherd dog, who is holding his favorite teddy bear. The dog should look friendly and heroic, matching the style of the 'RAIKO TO THE MOON' and 'VERIFIED GOOD BOI' images. The meme content should be about: ${prompt}.`;

        const response = await aiClient.models.generateImages({
            model: imageModel,
            prompt: fullPrompt,
            config: {
                numberOfImages: 1,
                outputMimeType: 'image/jpeg',
                aspectRatio: '1:1',
            },
        });
        
        const base64ImageBytes = response.generatedImages[0].image.imageBytes;
        return `data:image/jpeg;base64,${base64ImageBytes}`;

    } catch (error) {
        console.error("Error generating Raiko meme:", error);
        return "Bork! My paws slipped and I couldn't draw that. Try another idea!";
    }
};