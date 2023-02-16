import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

let mongo: any = null;

export const connectDB = async () => {
    mongo = await MongoMemoryServer.create();
    console.log(mongo)
    const uri = await mongo.getUri();
    console.log()
    console.log(uri)
  await mongoose.connect(uri);
};

export const dropDB = async () => {
  if (mongo) {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongo.stop();
  }
};

export const dropCollections = async () => {
  if (mongo) {
    (await mongoose.connection.db.collections()).forEach(collection => collection.drop());
  }
};
