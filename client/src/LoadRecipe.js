import styled from 'styled-components';
import react from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import cooking from './pictures/cooking.png';
import AccordionItem from './AccordionItem';
import Feed from './Feed';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Profile from './Profile';
import LogoutButton from './LogoutButton';

const LoadRecipe = () => {
  const navigate = useNavigate();
  const [ShowRecipes, setShowRecipe] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  const returnHome = () => {
    navigate(`/FoodSelection`);
  };

  useEffect(() => {
    const ingredientsInStorage = localStorage.getItem('ingredients');
  }, []);

  return (
    <MainWrapper>
      <BackgroundImgDiv>
        <Backbutton onClick={returnHome}>⮐</Backbutton>
        <LogoutDiv>
          <LogoutButton />
        </LogoutDiv>
        <Profile />
      </BackgroundImgDiv>

      <Feed />
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  margin: 0;
  background-color: #ccc4b4;
  @media screen and (max-width: 768px) {
    body {
      background-size: inherit;
    }
  }
`;

const BackgroundImgDiv = styled.div`
  margin: 0;
  background-image: url(${cooking});
  background-size: cover;
  position: relative;
  @media screen and (max-width: 768px) {
    body {
      background-size: inherit;
    }
  }
`;
const LogoutDiv = styled.div`
  display: flex;

  justify-content: flex-end;
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
