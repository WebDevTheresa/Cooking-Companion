import styled from 'styled-components';
import React from 'react';
import Sidebar from './SideBar';
import LoadRecipe from './LoadRecipe';

const Feed = () => {
  return (
    <Wrapper>
      <Sidebar />
      <RecipeFeed> </RecipeFeed>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const RecipeFeed = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 65px;
  width: 700px;
  border: 1px solid rgb(230, 230, 230);
  background-color: white;
`;

const AddRecipeButton = styled.button`
  background-image: linear-gradient(
    to right,
    #f0c27b 0%,
    #4b1248 51%,
    #f0c27b 100%
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
export default Feed;
