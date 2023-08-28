const { MongoClient, ObjectId } = require('mongodb');

require('dotenv').config({ path: '../.env' });

const { MONGO_URI } = process.env;
const { DB_NAME } = process.env;
const { MENU_COLLECTION } = process.env;
const { USER_COLLECTION } = process.env;
const { SAVED_COLLECTION } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

//--------------------------------------------------------------

const getIngredients = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const { foodtype } = req.query;
  try {
    await client.connect();
    console.log('connected');
    const db = client.db(DB_NAME);
    const collection = db.collection(MENU_COLLECTION);

    const ingredientChoices = await collection
      .find({ foodtype: foodtype })
      .toArray();

    res.status(200).json({ status: 200, data: ingredientChoices });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 500, message: 'internal error' });
  } finally {
    if (client.close());
    {
      console.log('disconnected');
    }
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

const deleteRecipe = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const { recipeData } = req.body;
  // console.log(id);
  try {
    await client.connect();
    console.log('connected');

    const db = client.db(DB_NAME);
    const collection = db.collection(SAVED_COLLECTION);

    const recipeToDelete = {
      recipe: recipeData,
    };

    const recipe = await collection.deleteOne(recipeToDelete);
    console.log(recipe);

    if (!recipe) {
      return res.status(404).json({ status: 404, message: 'Recipe not found' });
    }
    res
      .status(200)
      .json({ status: 200, message: 'Recipe deleted successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 500, message: 'Internal error' });
  } finally {
    client.close();
    console.log('disconnected');
  }
};

const postARecipe = async (req, res) => {
  console.log(req.body);
  const client = new MongoClient(MONGO_URI, options);

  const { recipe } = req.body;

  try {
    await client.connect();
    console.log('connected');

    const db = client.db(DB_NAME);
    const collection = db.collection(MENU_COLLECTION);

    const newRecipe = {
      recipe,
    };

    const result = await collection.insertOne(newRecipe);
    console.log(result);
    res.status(200).json({
      status: 200,
      message: 'Recipe saved successfully',
      recipe,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 500, message: 'Internal error' });
  } finally {
    client.close();
    console.log('disconnected');
  }
};

const likeRecipe = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  const { recipe } = req.body;

  try {
    await client.connect();
    console.log('connected');

    const db = client.db(DB_NAME);
    const collection = db.collection(SAVED_COLLECTION);

    const saveRecipe = {
      recipe,
    };

    const result = await collection.insertOne(saveRecipe);
    console.log(result);
    res.status(200).json({
      status: 200,
      message: 'Recipe saved successfully',
      recipe,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 500, message: 'Internal error' });
  } finally {
    client.close();
    console.log('disconnected');
  }
};

const getSavedRecipes = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();
    console.log('connected');

    const db = client.db(DB_NAME);
    const collection = db.collection(SAVED_COLLECTION);

    const savedRecipe = await collection.find().toArray();
    if (savedRecipe) {
      res.status(200).json({
        status: 200,
        message: 'Recipe retrieved successfully',
        recipe: savedRecipe,
      });
    } else {
      res.status(404).json({ status: 404, message: 'No saved recipe found' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 500, message: 'Internal error' });
  } finally {
    client.close();
    console.log('disconnected');
  }
};

module.exports = {
  getIngredients,
  createUser,
  deleteRecipe,
  postARecipe,
  likeRecipe,
  getSavedRecipes,
};
