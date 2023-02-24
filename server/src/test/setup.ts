import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import { app } from "../app";

let mongo: any;
beforeAll(async () => {
  console.log("Starting in-memory mongodb...");
  mongo = await MongoMemoryServer.create(     );
  const mongoUri = mongo.getUri();

  mongoose.set("strictQuery", true);
  await mongoose.connect(mongoUri);
});

beforeEach(async () => {
  const collections = await mongoose.connection.db.collections();

  for (let collection of collections) {
    await collection.deleteMany({});
  }
});

afterAll(async () => {
  console.log("... stopping in-memory mongodb");
  await mongo.stop();
  await mongoose.connection.close();
});
