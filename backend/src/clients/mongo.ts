import mongoose from "mongoose";

class MongoClient {
  init = async () => {
    mongoose.connect('mongodb+srv://senciz:SenoOmis!1725%40@cluster0.chrdhyk.mongodb.net/MyBreweryCompanion')
    mongoose.connection.on('connected', () => {
      console.log('Connected to database')
    })
  }
}

export const MongoClientConnection = new MongoClient();