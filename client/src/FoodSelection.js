import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import Accordion from './Accordion';
import AccordionItem from './AccordionItem';
import cooking from './pictures/cooking.png';
import { useNavigate } from 'react-router-dom';
import Profile from './Profile';
import Sidebar from './SideBar';

const FoodSelection = ({ items, title }) => {
  const navigate = useNavigate();

  const [chosenIngredients, setChosenIngredients] = useState([]);
  console.log(items, 'items');

  const returnHome = () => {
    navigate(`/`);
  };

  const searchRecipes = () => {
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
    {
      title: 'Dairy',
      content: 'Content for item 2...',
    },
    // {
    //   title: 'Spices',
    //   content: 'Content for item 2...',
    // },
    // {
    //   title: 'Misc',
    //   content: 'Content for item 2...',
    // },
  ];

  if (!FoodSelection) {
    return <div>Loading...</div>;
  }
  return (
    <MainWrapper>
      <Backbutton onClick={returnHome}>⮐</Backbutton>
      <Profile />
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
  margin-left: 10px;
  height: 50px;
  text-align: center;
  background-size: 200% auto;
  color: white;
  border-radius: 10px;
  display: block;
`;

export default FoodSelection;
