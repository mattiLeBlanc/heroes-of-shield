import { IsInt, IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateCrisisDto {
  @IsString()
  @ApiModelProperty()
  readonly name: string;

  @IsString()
  @ApiModelProperty()
  readonly location: string;

  @IsInt()
  @ApiModelProperty()
  readonly severity: number;

  @IsString()
  @ApiModelProperty()
  readonly description: string;
}
