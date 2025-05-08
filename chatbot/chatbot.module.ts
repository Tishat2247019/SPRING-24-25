import { Module } from '@nestjs/common';
import { ChatbotService } from './chatbot.service';
import { ChatbotController } from './chatbot.controller';
import { OpenaiService } from './openai.service';

@Module({
  controllers: [ChatbotController],
  providers: [ChatbotService, OpenaiService],
})
export class ChatbotModule {}
