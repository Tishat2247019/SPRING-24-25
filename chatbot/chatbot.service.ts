import { Injectable } from '@nestjs/common';
import { ProductService } from '../product/product.service';
import { OpenaiService } from './openai.service';

@Injectable()
export class ChatbotService {
  constructor(private readonly openaiService: OpenaiService) {}

  async processMessage(message: string): Promise<string> {
    // Check if message asks about stock
    // if (message.toLowerCase().includes('stock')) {
    //   if (message.toLowerCase().includes('iphone')) {
    //     const stock = await this.productService.getStock('iphone');
    //     return `We have ${stock} iPhones in stock.`;
    //   }
    //   // Add other products here
    // }

    // Otherwise, pass to AI
    const aiResponse = await this.openaiService.askQuestion(message);
    return aiResponse;
  }
}
