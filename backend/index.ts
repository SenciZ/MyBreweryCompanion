import express from 'express';
import {userRouter} from './src/routes/user'
import mongoose from 'mongoose';
import path from 'path';

const app = express();
app.use('/', userRouter)

app.use(express.static(path.join(__dirname, '../../frontend/build')));
app.get('/*', (req, res) => res.sendFile(path.join(__dirname, "../../frontend/build", 'index.html')))


app.listen(4000, () => console.log('Listening on port 4000'));

