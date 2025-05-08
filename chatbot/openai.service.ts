import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';

@Injectable()
export class OpenaiService {
  private openai: OpenAI;

  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY, // make sure this is set in your .env file
    });
  }

  async askQuestion(prompt: string): Promise<string> {
    const completion = await this.openai.chat.completions.create({
      model: 'gpt-3.5-turbo', // or 'gpt-4' if available
      messages: [{ role: 'user', content: prompt }],
    });

    return completion.choices[0]?.message?.content?.trim() || '';
  }
}
