import { IsInt, IsString } from 'class-validator';

export class CreateCrisisDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly location: string;

  @IsInt()
  readonly severity: number;

  @IsString()
  readonly description: string;
}
