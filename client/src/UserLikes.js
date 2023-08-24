import styled from 'styled-components';
import React from 'react';
import cooking from './pictures/cooking.png';
import { useNavigate } from 'react-router-dom';
import Sidebar from './SideBar';
import { Link, NavLink } from 'react-router-dom';

const UserLikes = () => {
  const navigate = useNavigate();
  const returnHome = () => {
    navigate(`/LoadRecipe`);
  };
  return (
    <MainWrapper>
      <Backbutton onClick={returnHome}>⮐</Backbutton>
      <Wrapper>
        <NavigationLink to="/"> Home</NavigationLink>
        <NavigationLink to="/FoodSelection"> Ingredients</NavigationLink>
        <NavigationLink to="/LoadRecipe"> Recipes</NavigationLink>
      </Wrapper>
      <ShowLikesDiv>this a div</ShowLikesDiv>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  /* border-bottom: solid 8px lightgrey; */
  margin: 0;
  background-image: url(${cooking});
  background-repeat: repeat;
  background-size: cover;
  height: 100vh;
  position: relative;
  @media screen and (max-width: 768px) {
    body {
      background-size: inherit;
    }
  }
`;

const ShowLikesDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 65px;
  width: 700px;
  border: 1px solid rgb(230, 230, 230);
  background-color: white;
`;
const NavigationLink = styled(NavLink)`
  font-size: 24px;
  font-weight: bold;
  margin: 10px;
  text-decoration: none;
  color: black;

  &:hover {
    color: #c47d1f;
    width: 70%;
    border-radius: 12px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  margin-left: 20px;
  flex-direction: column;
  justify-content: space-between;
  width: 190px;
  background-color: #f7f0e6;
  padding: 30px;
  border-radius: 30px;
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
export default UserLikes;
