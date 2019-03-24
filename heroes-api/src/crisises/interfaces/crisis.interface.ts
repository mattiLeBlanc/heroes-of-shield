import { Document } from 'mongoose';

export interface Crisis extends Document {
  readonly name: string;
  readonly location: string;
  readonly severity: number;
  readonly description: string;
}
