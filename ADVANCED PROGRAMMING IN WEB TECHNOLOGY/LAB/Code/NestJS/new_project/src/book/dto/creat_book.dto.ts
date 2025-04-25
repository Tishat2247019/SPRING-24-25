import { IsNotEmpty } from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty({ message: 'Book details must be inserted' })
  title: string;
}
