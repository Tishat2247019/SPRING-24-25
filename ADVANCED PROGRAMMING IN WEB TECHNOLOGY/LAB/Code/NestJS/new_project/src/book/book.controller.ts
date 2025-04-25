import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/creat_book.dto';
import { UpdateBookDto } from './dto/update_book.dto';

@Controller('book')
export class BookController {
  constructor(private bookService: BookService) {}

  @Get()
  async getAllBooks() {
    return this.bookService.findall();
  }

  @Post()
  async createBook(@Body() body: CreateBookDto) {
    return this.bookService.create(body);
  }

  @Get(':id')
  async getBook(@Param('id') id: number) {
    return this.bookService.findOne(id);
  }

  @Put(':id')
  async updateBook(@Param('id') id: number, @Body() body: UpdateBookDto) {
    return this.bookService.update(id, body);
  }

  @Delete(':id')
  async deleteBook(@Param('id') id: number) {
    return this.bookService.delete(id);
  }
}
