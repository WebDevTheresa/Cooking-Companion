import styled from 'styled-components';
import react from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import cooking from './pictures/cooking.png';
import AccordionItem from './AccordionItem';
import Feed from './Feed';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';

const LoadRecipe = () => {
  const navigate = useNavigate();
  const [ShowRecipes, setShowRecipe] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  // console.log(ingredients, 'ingredients');
  const returnHome = () => {
    navigate(`/FoodSelection`);
  };

  useEffect(() => {
    const ingredientsInStorage = localStorage.getItem('ingredients');
    // console.log(ingredientsInStorage, 'ingredients in storage');
  }, []);

  return (
    <MainWrapper>
      <Backbutton onClick={returnHome}>⮐</Backbutton>

      <Feed />
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  margin: 0;
  background-image: linear-gradient(
    to right top,
    #f4f2d5,
    #e8e3be,
    #dcd4a7,
    #d1c491,
    #c6b57b,
    #bda96b,
    #b39e5b,
    #aa924b,
    #9f873c,
    #947d2d,
    #89721c,
    #7e6806
  );
  @media screen and (max-width: 768px) {
    body {
      background-size: inherit;
    }
  }
`;

const ShowRecipes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;
  height: 100vh;
  background-color: white;
  border: 2px black solid;
`;
const Backbutton = styled.button`
  background-color: #666600;
  margin-left: 20px;
  height: 50px;
  text-align: center;
  background-size: 200% auto;
  color: white;
  border-radius: 10px;
  display: block;
`;
export default LoadRecipe;
