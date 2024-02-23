import mongoose from 'mongoose';
const { Schema } = mongoose;

const categorySchema = new Schema({
    categoryName:{type:String},
    events:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"iticket-events"
    }
    ],
   
});

export const Category=mongoose.model('iticket-events-categories',categorySchema)