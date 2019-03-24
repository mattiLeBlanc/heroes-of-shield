import { ApiModelProperty } from '@nestjs/swagger';

export interface Hero {
  name: string;
  age: number;
  superPower: string;
}

export class HeroCreateResponse  {
  @ApiModelProperty()
  // tslint:disable-next-line
  readonly _id: string;
  @ApiModelProperty()
  readonly name: string;
  @ApiModelProperty()
  readonly age: number;
  @ApiModelProperty()
  readonly superPower: string;
}
