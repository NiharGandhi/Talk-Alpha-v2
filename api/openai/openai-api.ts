import { OpenAI } from 'openai';

export class OpenAIAPI {
    private client: OpenAI;

    constructor() {
        this.client = new OpenAI(process.env.NEXT_PUBLIC_OPENAI_API_KEY);
    }}