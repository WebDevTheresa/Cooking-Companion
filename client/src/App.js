import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { React, useEffect } from 'react';
import FoodSelection from './FoodSelection';
import Home from './Home';
import LoadRecipe from './LoadRecipe';
import UserLikes from './UserLikes';
import axios from 'axios';
// import PostRecipe from './PostRecipe';
// import { getSearchRecipesbyIngredients } from './NutritionApi';

const App = () => {
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
