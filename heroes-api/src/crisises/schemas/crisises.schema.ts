import * as mongoose from 'mongoose';

export const CrisisSchema = new mongoose.Schema({
  name: String,
  location: String,
  serverity: Number,
  descripton: String,
});
