import { GoogleGenerativeAI, GenerativeModel } from "@google/generative-ai";

class AiApi {
    private genAi: GoogleGenerativeAI
    private model: GenerativeModel
    constructor() {
        this.genAi = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_API_KEY);
        this.model = this.genAi.getGenerativeModel({ model: "gemini-1.5-flash" });
    }

    async generateText(promt: string): Promise<string> {
        const result = (await this.model.generateContent(promt));
        return result.response.text();
    }
}

const AiApiInstance = new AiApi();
export { AiApiInstance };