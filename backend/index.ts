import express, { Express, Request, Response } from 'express';
import path from 'path';
import mongoose from 'mongoose';
import userRouter from './src/routes/user';
import breweriesRouter from './src/routes/breweries';
import cors from 'cors'; //const cors = require('cors');
import dotenv from 'dotenv';
import errorHandler from './src/middleware/errorHandler';

dotenv.config();
const PORT = process.env.PORT || 8000;

const app:Express = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '../../frontend/build')));
mongoose.set('strictQuery', true)
mongoose.connect(process.env.DATABASE_CONNECTION_STRING)
.then(()=> console.log('Database Connected'))
.catch((err)=> console.log('Error connecting to databse', err));


// app.use('/user', userRouter);
app.use('/', breweriesRouter);

app.get('/*', (req, res) => res.sendFile(path.join(__dirname, "../../frontend/build", 'index.html')))
app.use(errorHandler);
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

