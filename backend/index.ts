import express, { Express, Request, Response } from 'express';
import path from 'path';
import mongoose from 'mongoose';
import userRouter from './src/routes/user';
import breweriesRouter from './src/routes/breweries';
import cors from 'cors'; //const cors = require('cors');
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 4000;

const app:Express = express();

app.use(cors());
app.use(express.json());

mongoose.set('strictQuery', true)
mongoose.connect(process.env.DATABASE_CONNECTION_STRING)
.then(()=> console.log('Database Connected'))
.catch((err)=> console.log('Error connecting to databse', err));


app.use('/', userRouter);
app.use('/', breweriesRouter);

app.use(express.static(path.join(__dirname, '../../frontend/build')));
app.get('/*', (req, res) => res.sendFile(path.join(__dirname, "../../frontend/build", 'index.html')))

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

