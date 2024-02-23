import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  surname: String,
  number: String,
  email: String,
  password: String,
  role: {
    type: String,
    enum: ['user', 'admin'], // Define possible roles
    default: 'user' // Set a default role if not provided
  },
inWishList:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"iticket-events"
    }
],
inBasket:[
  {
      type:mongoose.Schema.Types.ObjectId,
      ref:"iticket-events"
  }
]
});

const User = mongoose.model('iticket-User', userSchema);

export default User;

