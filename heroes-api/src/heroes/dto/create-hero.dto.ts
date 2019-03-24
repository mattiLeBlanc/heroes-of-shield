import { IsInt, IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateHeroDto {
  @IsString()
  @ApiModelProperty()
  readonly name: string;

  @IsInt()
  @ApiModelProperty()
  readonly age: number;

  @IsString()
  @ApiModelProperty()
  readonly superPower: string;
}
