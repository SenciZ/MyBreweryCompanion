import express from 'express';
import {userRouter} from './src/routes/user'
import mongoose from 'mongoose';
import path from 'path';

const app = express();

app.use(express.static(path.join(__dirname, '../../frontend/build')));
app.get('/*', (req, res) => res.sendFile(path.join(__dirname, "../../frontend/build", 'index.html')))

app.use('/', userRouter)

mongoose.connect('mongodb+srv://SenciZ:SenoOmis!1725%40@cluster0.glsoip8.mongodb.net/appy')
.then(()=> console.log('Database Connected'))
.catch((err)=> console.log('Error connecting to databse', err));

app.listen(4000, () => console.log('Listening on port 4000'));

