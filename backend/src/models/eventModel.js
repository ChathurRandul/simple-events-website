import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const EventSchema = new Schema({
  name: {
    type: String,
  },
  date: {
    type: String,
  },
  time: {
    type: String,
  },
  seats: {
    type: Number,
  },
  charge: {
    type: String,
  },
  imgUrl: {
    type: String,
  },
});
