import { OpenAIAPI } from './openai-api';

const openai = new OpenAIAPI();

export async function createAssistant() {
  return openai.createAssistant();
}