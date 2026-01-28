import { GoogleGenerativeAI } from "@google/generative-ai";
import { gptApiKey } from "../utils/constants";

// 1. Initialize the Google Generative AI with your API Key
const genAI = new GoogleGenerativeAI(gptApiKey);

// 2. Specify the model you want to use (e.g., gemini-1.5-flash)
const client = genAI.getGenerativeModel({ 
    model: "gemini-3-flash-preview",
});

export default client;