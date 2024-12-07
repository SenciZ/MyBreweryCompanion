import express, { Express, Request, Response } from 'express';
import path from 'path';
import mongoose from 'mongoose';
import cors from 'cors'; //const cors = require('cors');
import dotenv from 'dotenv';
import errorHandler from './src/middleware/errorHandler';
import routers from './src/routers';
import { MongoClientConnection } from './src/clients/mongo';

dotenv.config();

const PORT = process.env.PORT || 8000;
const MODE = process.env.MODE;

(() => {
  const app: Express = express();

  app.use(cors());
  app.use(express.json());

  // app.use(express.static(path.join(__dirname, "/build")));
  mongoose.set('strictQuery', true)

  MongoClientConnection.init();

  routers(app)

  // app.get('/*', (req, res) => res.sendFile(path.join(__dirname, "/build", 'index.html')))

  app.use(errorHandler);

  app.listen(PORT, () => console.log(`Listening on port ${PORT} in `, process.env.MODE));
})();