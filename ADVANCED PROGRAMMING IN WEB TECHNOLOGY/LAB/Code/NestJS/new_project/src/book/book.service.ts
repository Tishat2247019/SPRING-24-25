import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.entity';
import { CreateBookDto } from './dto/creat_book.dto';
import { promises } from 'dns';
import { UpdateBookDto } from './dto/update_book.dto';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book) private bookRepository: Repository<Book>,
  ) {}

  findall() {
    return this.bookRepository.find();
  }

  create(bookDto: CreateBookDto): Promise<Book> {
    const book = this.bookRepository.create(bookDto);

    return this.bookRepository.save(book);
  }

  async findOne(id: number): Promise<Book> {
    const book = await this.bookRepository.findOne({ where: { id } });

    if (!book) {
      throw new NotFoundException('Book not found');
    }

    return book;
  }

  async update(id: number, bookDto: UpdateBookDto): Promise<Book> {
    const book = await this.bookRepository.findOneBy({ id });

    if (!book) {
      throw new NotFoundException('Book not found');
    }

    Object.assign(book, bookDto);

    return this.bookRepository.save(book);
  }

  async delete(id: number) {
    const book = await this.bookRepository.findOne({ where: { id } });
    if (!book) {
      return 'book not found';
    }
    this.bookRepository.remove(book);
  }
}
