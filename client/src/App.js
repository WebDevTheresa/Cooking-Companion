import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import FoodSelection from './FoodSelection';
import Home from './Home';
import LoadRecipe from './LoadRecipe';
import UserLikes from './UserLikes';

// import PostRecipe from './PostRecipe';
// import { getSearchRecipesbyIngredients } from './NutritionApi';

const App = () => {
  // const options = ('./nutritionApi');

  // const apiOptions = {
  //   ingredients: 'ingreidents',
  //   number: '7',
  //   ignorePantry: 'true',
  //   ranking: '1',
  // };
  // console.log(apiOptions);

  // const fetchRecipeApi = async () => {
  //   try {
  //     const response = await getSearchRecipesbyIngredients('ingredients');
  //     console.log(response.data, 'data response');
  //   } catch (error) {
  //     console.error('An error occurred:', error);
  //   }
  // };

  // useEffect(() => {
  //   fetchRecipeApi();
  // }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FoodSelection" element={<FoodSelection />} />
        <Route path="/LoadRecipe" element={<LoadRecipe />} />
        <Route path="/UserLikes" element={<UserLikes />} />

        {/* <Route path="/PostRecipe" element={<PostRecipe />} /> */}

        {/* Add more routes here if needed */}
      </Routes>
    </Router>
  );
};

export default App;
