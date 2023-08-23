import styled from 'styled-components';
import React from 'react';
import cooking from './pictures/cooking.png';
import Sidebar from './SideBar';
import { Link, NavLink } from 'react-router-dom';

const UserLikes = () => {
  return (
    <MainWrapper>
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
  flex-direction: column;
  justify-content: space-between;
  width: 190px;
  background-color: #f7f0e6;
  padding: 30px;
  border-radius: 30px;
`;
export default UserLikes;
