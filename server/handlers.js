const { MongoClient } = require('mongodb');

require('dotenv').config({ path: '../.env' });

const { MONGO_URI } = process.env;
const { DB_NAME } = process.env;
const { MENU_COLLECTION } = process.env;
const { USER_COLLECTION } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

//--------------------------------------------------------------

const getIngredients = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const { _id } = req.params;
  try {
    await client.connect();
    console.log('connected');
    const db = client.db(DB_NAME);
    const collection = db.collection(MENU_COLLECTION);

    const ingredientChoice = await collection.find().toArray();

    res.status(200).json({ status: 200, data: ingredientChoice });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 500, message: 'internal error' });
  } finally {
    client.close();
    console.log('disconnected');
  }
};

const createUser = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const { email, name, nickname, sub } = req.body.user;

  try {
    await client.connect();
    console.log('connected');

    const db = client.db(DB_NAME);
    const collection = db.collection(USER_COLLECTION);

    const user = {
      _id: sub,
      email,
      name,
      nickname,
    };
    const newUser = await collection.insertOne(user);
    console.log(newUser);
    res.status(200).json({ status: 200, data: newUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 500, message: 'internal error' });
  } finally {
    client.close();
    console.log('disconnected');
  }
};

module.exports = { getIngredients, createUser };
