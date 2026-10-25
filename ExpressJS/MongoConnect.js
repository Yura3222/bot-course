import { MongoClient } from 'mongodb';

const client = new MongoClient("mongodb+srv://zukevic2000_db_user:7419630artes@cluster0.l61ijbw.mongodb.net/?appName=Cluster0");

export async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("You successfully connected to MongoDB!");
    return client;
  } catch (err) {
    console.dir(err);
  }
}

// Call this only when your application terminates
export async function disconnectFromMongoDB() {
  await client.close();
}