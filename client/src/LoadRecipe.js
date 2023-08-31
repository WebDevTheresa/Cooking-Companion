import styled from 'styled-components';
import react from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import cooking from './pictures/cooking.png';

import Feed from './Feed';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Profile from './Profile';
import LogoutButton from './LogoutButton';

const LoadRecipe = () => {
  const navigate = useNavigate();
  const [ShowRecipes, setShowRecipe] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const ingredientsInStorage = localStorage.getItem('ingredients');
  }, []);

  return (
    <MainWrapper>
      <BackgroundImgDiv>
        <LogoutDiv>
          <Profile />
          <LogoutButton />
        </LogoutDiv>
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

export default LoadRecipe;
