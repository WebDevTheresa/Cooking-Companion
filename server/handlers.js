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
  const { id } = req.params;

  try {
    await client.connect();
    console.log('connected');

    const db = client.db(DB_NAME);
    const collection = db.collection(MENU_COLLECTION);

    const recipe = await collection.findOneAndDelete({ _id: new ObjectId(id) });

    if (!recipe.value) {
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

// const likeRecipe = async (req, res) => {
//   const client = new MongoClient(MONGO_URI, options);
//   const { recipe } = req.body;
//   // console.log(recipe);
//   try {
//     await client.connect();
//     console.log('connected');

//     const db = client.db(DB_NAME);
//     const collection = db.collection(SAVED_COLLECTION);

//     const savedRecipe = await collection.findOne({ _id: new ObjectId(recipe) });

//     if (!savedRecipe) {
//       return res.status(404).json({ status: 404, message: 'Recipe not found' });
//     }

// savedRecipe.likes = (savedRecipe.likes || 0) + 1;

//     await collection.updateOne(
//       { _id: new ObjectId(recipe) },
//       { $set: { likes: savedRecipe.likes } }
//     );

//     res.status(200).json({
//       status: 200,
//       message: 'Recipe liked successfully',
//       recipe: savedRecipe,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ status: 500, message: 'Internal error' });
//   } finally {
//     client.close();
//     console.log('disconnected');
//   }
// };

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

module.exports = {
  getIngredients,
  createUser,
  deleteRecipe,
  postARecipe,
  likeRecipe,
};
