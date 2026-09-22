import express from 'express';

import { Router } from 'express';

import authroutes from './routes/auth.routes.js'
import musicroutes from './routes/music.routes.js'
import albumroutes from './routes/ablum.routes.js'
import cookieParser from 'cookie-parser';


const app=express();
app.use(cookieParser());


app.use(express.json());

app.use('/api/auth',authroutes)
app.use('/api/music',musicroutes);
app.use('/api/album',albumroutes);


const router=Router();



export default app;




// the atrist can view all its album when he goes to the /api/album
