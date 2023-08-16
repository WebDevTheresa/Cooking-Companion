const { getIngredients, createUser } = require('./handlers');

//fill in squiggles with endpoint names

const router = require('express').Router();

router.get('/getIngredients', getIngredients);
router.post('/createUser', createUser);

router.get('hello', (req, res) => {
  return res.status(200).json({ status: 200, message: 'hello from server' });
});

module.exports = router;
