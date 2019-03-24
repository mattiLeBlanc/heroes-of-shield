import * as mongoose from 'mongoose';

export const HeroSchema = new mongoose.Schema({
  name: String,
  age: Number,
  superPower: String,
});
