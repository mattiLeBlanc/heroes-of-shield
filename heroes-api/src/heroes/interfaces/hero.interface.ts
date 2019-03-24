import { Document } from 'mongoose';

export interface Hero extends Document {
  readonly name: string;
  readonly age: number;
  readonly superPower: string;
}
