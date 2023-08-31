import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Accordion from './Accordion';
import AccordionItem from './AccordionItem';
import cooking from './pictures/cooking.png';
import { useNavigate } from 'react-router-dom';
import Profile from './Profile';
import LogoutButton from './LogoutButton';
const FoodSelection = ({ items, title, user }) => {
  const navigate = useNavigate();

  const [chosenIngredients, setChosenIngredients] = useState([]);

  const returnHome = () => {
    navigate(`/`);
  };

  const searchRecipes = async () => {
    const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=${localStorage
      .getItem('ingredients')
      .replaceAll(',', '%2C')}&number=5&ignorePantry=true&ranking=1`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
        'X-RapidAPI-Host':
          'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      localStorage.setItem('ingredients', '');
      localStorage.setItem('recipeResults', JSON.stringify(result));
      console.log(result);
    } catch (error) {
      console.error(error);
    }

    navigate(`/LoadRecipe`);
  };

  const accordionItems = [
    {
      title: 'Protein',
    },
    {
      title: 'Vegetable',
      content: 'Content for item 2...',
    },
    {
      title: 'Starch',
      content: 'Content for item 2...',
    },
  ];

  if (!FoodSelection) {
    return <div>Loading...</div>;
  }
  return (
    <MainWrapper>
      <LogoutDiv>
        <Profile />
        <LogoutButton />
      </LogoutDiv>
      <HeaderWrapper>
        <Header>Select Your Ingredients</Header>
      </HeaderWrapper>
      <ButtonWrapper>
        <NextButton onClick={searchRecipes}>Search</NextButton>
      </ButtonWrapper>
      <Accordion items={accordionItems} />
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  margin: 0;
  background-image: url(${cooking});
  background-size: cover;
  height: 100vh;
  position: relative;
  @media screen and (max-width: 768px) {
    body {
      background-size: inherit;
    }
  }
`;

const NextButton = styled.button`
  background-image: linear-gradient(
    to right,
    #f3904f 0%,
    #3b4371 51%,
    #f3904f 100%
  );
  margin: 10px;
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;

  &:hover {
    background-position: right center;
    color: #fff;
    text-decoration: none;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: column;
  justify-content: space-evenly;
`;
const ContentsButton = styled.button`
  width: 90px;
  height: 37px;
  border-style: none;
  border-radius: 22%;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  //
`;
const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Header = styled.h1`
  margin: 0;
  font-size: 50px;
  color: #f3904f;
  font-family: 'ariel', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
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
const LogoutDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export default FoodSelection;
