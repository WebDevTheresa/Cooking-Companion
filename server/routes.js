const {
  getIngredients,
  createUser,
  deleteRecipe,
  postANote,
  likeRecipe,
  getSavedRecipes,
  patchARecipe,
  getNotes,
} = require('./handlers');

//fill in squiggles with endpoint names

const router = require('express').Router();

router.get('/getIngredients', getIngredients);
router.post('/createUser', createUser);
router.delete('/deleteRecipe/', deleteRecipe);
router.post('/recipes', postANote);
router.post('/recipeLikes', likeRecipe);
router.get('/getSavedRecipes', getSavedRecipes);
router.patch('/patchARecipe', patchARecipe);
router.get('/getNotes', getNotes);

router.get('hello', (req, res) => {
  return res.status(200).json({ status: 200, message: 'hello from server' });
});

module.exports = router;
