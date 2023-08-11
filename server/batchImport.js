const { MongoClient } = require('mongodb');

require('dotenv').config({ path: '../.env' });
const { Menu } = require('./data/Menu');

const { MONGO_URI } = process.env;
const { DB_NAME } = process.env;
const { MENU_COLLECTION } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const batchImport = async () => {
  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();
    console.log('connected!');
    const db = client.db(DB_NAME);
    const collection = db.collection(MENU_COLLECTION);
    const result = await collection.insertMany(Menu);
    console.log('success');
    console.log(result);
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
    console.log('disconnected');
  }
};

batchImport();
