import styled from 'styled-components';
import react from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import cooking from './pictures/cooking.png';
import AccordionItem from './AccordionItem';
import Feed from './Feed';

const LoadRecipe = () => {
  const navigate = useNavigate();
  const [ShowRecipes, setShowRecipe] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  console.log(ingredients, 'ingredients');
  const returnHome = () => {
    navigate(`/FoodSelection`);
  };

  useEffect(() => {
    const ingredientsInStorage = localStorage.getItem('ingredients');
    // console.log(ingredientsInStorage, 'ingredients in storage');
  }, []);

  return (
    <MainWrapper>
      <Feed />
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  margin: 0;
  background-image: url(${cooking});
  /* background-repeat: repeat; */
  background-size: cover;
  height: 100vh;
  position: relative;
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

export default LoadRecipe;
