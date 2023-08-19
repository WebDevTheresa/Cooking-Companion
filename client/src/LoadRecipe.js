import styled from 'styled-components';
import react from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import hands from './pictures/hands.png';
import AccordionItem from './AccordionItem';

const LoadRecipe = () => {
  const navigate = useNavigate();

  const returnHome = () => {
    navigate(`/FoodSelection`);
  };

  return (
    <MainWrapper>
      <Backbutton onClick={returnHome}>⮐</Backbutton>
    </MainWrapper>
  );
};
const Backbutton = styled.button`
  background-color: #666600;
  margin: 10px;
  height: 50px;
  text-align: center;
  background-size: 200% auto;
  color: white;
  border-radius: 10px;
  display: block;
`;

const MainWrapper = styled.div`
  margin: 0;
  background-image: url(${hands});
  background-repeat: repeat;
  background-size: repeat;
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
