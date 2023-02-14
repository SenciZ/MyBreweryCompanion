import express from 'express';
import {userRouter} from './src/routes/user'
import mongoose from 'mongoose';
import path from 'path';
import dotenv from 'dotenv';
import cors from 'cors';
import { breweryRouter } from './src/routes/breweries';

const app = express();
app.use(express.json());
dotenv.config();
app.use(cors);

app.use(express.static(path.join(__dirname, '../../frontend/build')));
app.get('/*', (req, res) => res.sendFile(path.join(__dirname, "../../frontend/build", 'index.html')))

app.use('/', userRouter)
app.use('/', breweryRouter)

mongoose.set('strictQuery', true)
mongoose.connect(process.env.DATABASE_CONNECTION_STRING)
.then(()=> console.log('Database Connected'))
.catch((err)=> console.log('Error connecting to databse', err));

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

