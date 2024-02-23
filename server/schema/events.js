import mongoose from 'mongoose';
const { Schema } = mongoose;

const eventSchema = new Schema({
  mainJPG:{type:String},
  bgImage:{type:String},
  detailImage:{type:String},
  category:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"iticket-events-categories"
}],
  name:{type:String},
  time:{type:Date},
  about:{type:String},
  aboutplace: {
    iframelink: { type: String },
    placename: { type: String },
    placeinfo: { type: String },
    mobile: { type: Array } 
  },
  languageandage:{type:Array},
  ticketsRemain:{
    type:Number
  },
  ticketsSold: {
    type: Number,
    default: 0
},
isActive: {
    type: Boolean,
    default: true
},
seats:[{
  type:mongoose.Schema.Types.ObjectId,
  ref:"iticket-seats"
}]
});

export const Event=mongoose.model('iticket-events',eventSchema)