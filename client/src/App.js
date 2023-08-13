import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FoodSelection from './FoodSelection';
import Home from './Home';

// import Navbar from './Navbar';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FoodSelection" element={<FoodSelection />} />
        {/* Add more routes here if needed */}
      </Routes>
    </Router>
  );
};

export default App;
