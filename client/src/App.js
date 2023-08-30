import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { React } from 'react';
import FoodSelection from './FoodSelection';
import Home from './Home';
import LoadRecipe from './LoadRecipe';
import UserLikes from './UserLikes';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FoodSelection" element={<FoodSelection />} />
        <Route path="/LoadRecipe" element={<LoadRecipe />} />
        <Route path="/UserLikes" element={<UserLikes />} />
      </Routes>
    </Router>
  );
};

export default App;
