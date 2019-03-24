import { IsInt, IsString } from 'class-validator';

export class CreateHeroDto {
  @IsString()
  readonly name: string;

  @IsInt()
  readonly age: number;

  @IsString()
  readonly superPower: string;
}
