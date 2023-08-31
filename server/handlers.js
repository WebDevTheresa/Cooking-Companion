const { MongoClient, ObjectId } = require('mongodb');

require('dotenv').config({ path: '../.env' });

const { MONGO_URI } = process.env;
const { DB_NAME } = process.env;
const { MENU_COLLECTION } = process.env;
const { USER_COLLECTION } = process.env;
const { SAVED_COLLECTION } = process.env;
const { POST_COLLECTION } = process.env;

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
  const { recipeData, userEmail } = req.body;

  try {
    await client.connect();
    console.log('connected');

    const db = client.db(DB_NAME);
    const collection = db.collection(SAVED_COLLECTION);
    const notesCollection = db.collection(POST_COLLECTION);

    const recipe = await collection.deleteOne({
      'recipe.id': recipeData,
      email: userEmail,
    });

    if (!recipe) {
      return res.status(404).json({ status: 404, message: 'Recipe not found' });
    }
    const userNotes = await notesCollection.deleteOne({
      id: recipeData,
      email: userEmail,
    });
    if (!userNotes) {
      return res.status(404).json({ status: 404, message: 'Note not found' });
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

const postANote = async (req, res) => {
  console.log(req.body);
  const client = new MongoClient(MONGO_URI, options);

  const { note, id, userEmail } = req.body;

  try {
    await client.connect();
    console.log('connected');

    const db = client.db(DB_NAME);
    const collection = db.collection(POST_COLLECTION);

    const result = await collection.updateOne(
      { id: id },
      { $set: { note: note, email: userEmail } },
      { upsert: true }
    );
    console.log(result);
    res.status(200).json({
      status: 200,
      message: 'Note Added successfully',
      note,
      id,
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

  const { recipe, email } = req.body;

  try {
    await client.connect();
    console.log('connected');

    const db = client.db(DB_NAME);
    const collection = db.collection(SAVED_COLLECTION);

    const saveRecipe = {
      recipe,
      email,
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
  const { user } = req.query;

  try {
    await client.connect();
    console.log('connected');

    const db = client.db(DB_NAME);
    const collection = db.collection(SAVED_COLLECTION);

    const savedRecipe = await collection.find({ email: user }).toArray();
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

const patchARecipe = async (req, res) => {
  const { recipeId, updatedRecipe } = req.body;

  if (!recipeId || !updatedRecipe) {
    return res.status(400).json({ status: 400, message: 'Invalid request' });
  }

  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();

    const db = client.db(DB_NAME);
    const collection = db.collection(POST_COLLECTION);

    const patchNote = {
      recipeId,
      updatedRecipe,
    };
    const result = await collection.updateOne(patchNote);
    console.log(result);

    if (result.matchedCount === 0) {
      return res.status(404).json({ status: 404, message: 'Recipe not found' });
    }

    res.status(200).json({
      status: 200,
      message: 'Recipe updated successfully',
      recipeId,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 500, message: 'Internal error' });
  } finally {
    client.close();
  }
};

const getNotes = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const { id, userEmail } = req.query;
  console.log(req.query);
  try {
    await client.connect();
    console.log('connected');

    const db = client.db(DB_NAME);
    const collection = db.collection(POST_COLLECTION);

    const notes = await collection
      .find({ id: Number.parseInt(id), email: userEmail })
      .toArray();

    if (collection) {
      res.status(200).json({
        status: 200,
        notes,
        message: 'note retrieved successfully',
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 500, message: 'Internal error' });
  } finally {
    // client.close();
    console.log('disconnected');
  }
};

module.exports = {
  getIngredients,
  createUser,
  deleteRecipe,
  postANote,
  likeRecipe,
  getSavedRecipes,
  patchARecipe,
  getNotes,
};
