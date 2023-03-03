import express, { Express, Request, Response } from 'express';
import path from 'path';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
const userRouter = require('./src/routes/user')
const cors = require('cors');
const app:Express = express();
dotenv.config();
app.use(cors());
app.use(express.json());

mongoose.set('strictQuery', true)
mongoose.connect(process.env.DATABASE_CONNECTION_STRING)
.then(()=> console.log('Database Connected'))
.catch((err)=> console.log('Error connecting to databse', err));

app.use(express.static(path.join(__dirname, '../../frontend/build')));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, "../../frontend/build", 'index.html')))

app.use('/user', userRouter);

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

