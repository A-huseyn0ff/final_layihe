import mongoose from 'mongoose';
const { Schema } = mongoose;

const seatsSchema = new Schema({
    row: {
        type: String,
        required: true
      },
      seat: {
        type: String,
        required: true
      },
      isBooked: {
        type: Boolean,
        default: false
      },
      price: {
        type: Number,
        required: true
      },
});

export const Seat=mongoose.model('iticket-seats',seatsSchema)