import mongoose from "mongoose";

const {
  DB_CONNECTION_STRING
} = process.env;

class MongoClient {
  init = async () => {
    mongoose.connect(`${DB_CONNECTION_STRING}`)
    mongoose.connection.on('connected', () => {
      console.log('Connected to database')
    })
  }
}

export const MongoClientConnection = new MongoClient();
