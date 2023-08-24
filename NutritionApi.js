const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients',
  params: {
    ingredients: 'ingredients',
    number: '7',
    ignorePantry: 'true',
    ranking: '1',
  },
  headers: {
    'X-RapidAPI-Key': '0613153440mshe2a14ecb716c72dp15bed8jsn1e385404eac2',
    'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}
