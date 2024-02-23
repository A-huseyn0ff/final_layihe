import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import router from './routes/user.js'
import routecategory from './routes/category.js'
import eventroute from './routes/events.js'
import Stripe from 'stripe';
import bodyParser from 'body-parser'
import seatsRoutes from './routes/place.js'
const app=express()
const stripe = new Stripe(process.env.SECRET_KEY);
app.use(express.json())
app.use(cors())
app.options('*', cors());
dotenv.config()
app.use('/users',router)
app.use(
    '/src/uploads',
    express.static(
      `https://res.cloudinary.com/${process.env.CLOUD_NAME}/image/upload/`
    )
  )

  app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/',routecategory)
app.use('/',eventroute)
app.use(seatsRoutes);
app.post("/payment", async (req, res) => {
    let status, error;
    const { token, amount } = req.body;
    try {
      await Stripe.charges.create({
        source: token.id,
        amount,
        currency: 'usd',
      });
      status = 'success';
    } catch (error) {
      console.log(error);
      status = 'Failure';
    }
    res.json({ error, status });
  });
mongoose.connect('mongodb+srv://akif:akif123@atlascluster.8zpslq0.mongodb.net/')
 


app.listen(8000,()=>{
    console.log('welcome to iticket');
})


