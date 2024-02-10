// route.ts

import { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

// Initialize OpenAI client
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

// Instruction message for the conversation
const instructionMessage = {
    role: 'system',
    content: 'You are a code generator. You must answer only in markdown code snippets. Use code comments for explanations.',
};

// Define the handler for the POST request
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    try {
        const { messages } = req.body;

        // Check if messages are provided
        if (!messages) {
            return res.status(400).json({ message: 'Messages are required' });
        }

        // Create a completion request
        const completionRequest = {
            model: 'gpt-3.5-turbo', // Adjust the model name as per your requirement
            messages: [instructionMessage, ...messages],
        };

        // Fetch completion from OpenAI
        const response = await openai.chat.completions.create(completionRequest);

        // Send the response back
        return res.status(200).json(response.choices[0].message.content?.trim());
    } catch (error) {
        console.error('[CODE_ERROR]', error);
        return res.status(500).json({ message: 'Internal Error' });
    }
}
