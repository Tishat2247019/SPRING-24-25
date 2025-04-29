import {
  IsString,
  IsNumber,
  IsUUID,
  IsOptional,
  IsDecimal,
} from 'class-validator';

export class CreateProductVariantDto {
  @IsUUID()
  id: string;

  @IsUUID()
  product_id: string;

  @IsString()
  variant_name: string;

  @IsDecimal()
  price: number;

  @IsNumber()
  stock: number;

  @IsString()
  sku: string;

  @IsOptional()
  images: string[]; // Optional array of image URLs or image IDs if you need to send images alongside variant creation
}
