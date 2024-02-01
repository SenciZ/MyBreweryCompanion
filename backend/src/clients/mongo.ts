import mongoose from "mongoose";

class MongoClient {
  init = async () => {
    mongoose.connect(process.env.DATABASE_CONNECTION_STRING)
    mongoose.connection.on('connected', () => {
      console.log('Connected to database')
    })
  }
}

export const MongoClientConnection = new MongoClient();