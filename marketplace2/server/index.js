import express from "express";
import {PORT, mongoDBurl} from "./config.js";
import mongoose from "mongoose";
import usersRoute from './routes/user.js';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser'

dotenv.config();
const app = express();

// Middleware for parsing request body
app.use(express.json());

app.use(cookieParser());

app.use(
   cors({
     origin: 'http://localhost:5173',
     methods: ['GET', 'POST', 'PUT', 'DELETE'],
     allowedHeaders: ['Content-Type'],
   })
 );
app.use(cors());


app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send('Welcome To MERN Stack Tutorial');
});

app.use('/auth', usersRoute)


mongoose.connect(mongoDBurl)
    .then(()=> {
        console.log('App connected to DB')
        app.listen(PORT, () => {
            console.log(`App -> port: ${PORT}`);    
        });
    })
    .catch((error) => {
        console.log(error);
    });