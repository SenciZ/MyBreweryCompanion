import express from 'express';
import {userRouter} from './src/routes/user'

const app = express();

app.use('/', userRouter)

app.listen(4000, () => console.log('Listening on port 4000'));

